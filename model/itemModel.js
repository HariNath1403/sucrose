const mongoose = require('mongoose');
const slugify = require('slugify');

const productSchema = new mongoose.Schema(
  {
    user: {
      type: String,
      required: [true, 'A user is required'],
    },
    slug: String,
    createdAt: {
      type: Date,
      default: Date.now(),
    },
    name: {
      type: String,
      required: [true, 'The name of the product must be specified'],
      unique: true,
    },
    type: {
      type: String,
      required: [true, 'A type must be specified'],
      enum: {
        values: ['Cookies', 'Cakes', 'Pastries', 'Others'],
        message: 'Choose either Cookies, Cakes, Pastries or Others',
      },
    },
    description: {
      type: String,
      required: [true, 'At least a simple description is required'],
    },
    additional: String,
    status: {
      type: String,
      enum: {
        values: ['active', 'inactive'],
        message: 'Choose either active or inactive only',
      },
      default: 'active',
    },
    price: {
      type: Number,
      required: [true, 'A price is required'],
    },
    discount: {
      type: Number,
      min: [0, 'A min of 0% is permited'],
      max: [100, 'A max of 100% is permited'],
    },
    validStartDate: Date,
    validEndDate: {
      type: Date,
      validate: {
        validator: function (val) {
          return !this.validStartDate || val > this.validStartDate;
        },
        message: 'The discount end date must be after the start date...',
      },
    },
    lastUpdated: [Date],
    editedBy: [String],
    image: {
      type: 'String',
      required: [true, 'An image is needed for each product'],
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  },
);

productSchema.pre('save', function (next) {
  this.slug = slugify(this.name, { lower: true });
  this.lastUpdated.push(Date.now());
  this.editedBy.push(this.user);
  next();
});

productSchema.virtual('priceAfterDiscount').get(function () {
  const today = new Date();

  if (this.discount && today >= this.validStartDate) {
    const curVal = (100 - this.discount) / 100;
    return Math.round(curVal * this.price, 0);
  }

  return this.price;
});

productSchema.post('init', (doc) => {
  const today = new Date();
  if (doc.validEndDate && doc.discount && today > doc.validEndDate) {
    doc.discount = 0;
  }
});

const Product = mongoose.model('Product', productSchema);
module.exports = Product;
