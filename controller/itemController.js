/* eslint-disable */
const Product = require('../model/itemModel');
const APIFeatures = require('../utilities/apiFeatures');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const catchAsync = require('../utilities/catchAsync');
const AppError = require('../utilities/appError');

const tempStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '../temp'));
  },
  filename: (req, file, cb) => {
    return cb(null, file.originalname.split('\\').pop());
  },
});
const upload = multer({ storage: tempStorage });

exports.uploadProdImage = upload.single('product-image');

exports.createNewProduct = catchAsync(async (req, res, next) => {
  const newProduct = await Product.create(req.body);

  res.status(201).json({
    status: 'success',
    data: {
      item: newProduct,
    },
  });
});

exports.getAllProducts = catchAsync(async (req, res, next) => {
  const features = new APIFeatures(Product.find(), req.query)
    .filter()
    .sort()
    .limitFields();

  const products = await features.query;

  res.status(200).json({
    status: 'success',
    results: products.length,
    data: {
      products,
    },
  });
});

exports.getOneProduct = catchAsync(async (req, res, next) => {
  const item = await Product.findById(req.params.id);

  if (!item) {
    return next(new AppError('No document found with that ID', 404));
  }

  const { __v, id, slug, ...otherFields } = item.toObject();

  res.status(200).json({
    status: 'success',
    data: {
      data: otherFields,
    },
  });
});

exports.updateProduct = catchAsync(async (req, res, next) => {
  const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!product) {
    return next(new AppError('No document found with that ID', 404));
  }

  Object.assign(product, req.body);
  await product.save();

  res.status(200).json({
    status: 'success',
    data: {
      patched: product,
    },
  });
});

exports.deleteProduct = catchAsync(async (req, res, next) => {
  await Product.findByIdAndDelete(req.params.id);

  res.status(204).json({
    status: 'success',
    data: null,
  });
});

exports.createProductWithImage = catchAsync(async (req, res, next) => {
  const {
    user,
    name,
    type,
    description,
    additional,
    status,
    price,
    discount,
    validStartDate,
    validEndDate,
  } = req.body;

  if (!req.file) {
    return res.status(400).json({ message: 'No file uploaded' });
  }

  const targetDir = path.join(__dirname, '../products');
  const targetFilePath = path.join(targetDir, req.file.filename);

  if (fs.existsSync(targetFilePath)) {
    fs.unlink(req.file.path, (err) => {
      if (err) console.error('Error deleting temp file:', err);
    });
    return res.status(400).json({
      message:
        'Please change the name of the image file, as a duplicate name is found',
    });
  }

  try {
    // prettier-ignore
    const newProduct = await Product.create({
      user, name, type, description, additional, status, price, discount, validStartDate, validEndDate, image: req.file.filename,
    });

    const finalPath = path.join(__dirname, '../products', req.file.filename);
    fs.renameSync(req.file.path, finalPath);

    res.status(201).json({
      status: 'success',
      data: {
        product: newProduct,
      },
    });
  } catch (error) {
    if (req.file) {
      fs.unlink(req.file.path, (err) => {
        if (err) console.error('Error deleting file:', err);
      });
    }
    next(error);
  }
});

exports.updateProductWithImage = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const updateData = { ...req.body };

  // Handle file upload
  if (req.file) {
    const targetDir = path.join(__dirname, '../products');
    const targetFilePath = path.join(targetDir, req.file.filename);

    if (fs.existsSync(targetFilePath)) {
      fs.unlink(req.file.path, (err) => {
        if (err) console.error('Error deleting temp file:', err);
      });
      return res.status(400).json({
        message:
          'Please change the name of the image file, as a duplicate name is found',
      });
    }

    try {
      const finalPath = path.join(__dirname, '../products', req.file.filename);
      fs.renameSync(req.file.path, finalPath);
      updateData.image = req.file.filename;
    } catch (error) {
      if (req.file) {
        fs.unlink(req.file.path, (err) => {
          if (err) console.error('Error deleting file:', err);
        });
      }
      return next(error);
    }
  }

  const product = await Product.findByIdAndUpdate(id, updateData, {
    new: true,
    runValidators: true,
  });

  if (!product) {
    return next(new AppError('No document found with that ID', 404));
  }

  res.status(200).json({
    status: 'success',
    data: {
      product,
    },
  });
});
