const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const path = require('path');
const compression = require('compression');

const AppError = require('./utilities/appError');
const globalErrorHandler = require('./utilities/errorController');
const productRouter = require('./routes/productRoute');
const userRouter = require('./routes/userRoute');

const app = express();

app.use(helmet());

const csp = {
  directives: {
    defaultSrc: ["'self'"],
    scriptSrc: ["'self'", 'https://unpkg.com'],
  },
};

app.use(helmet.contentSecurityPolicy(csp));
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(`${__dirname}/public`));
app.use('/products', express.static(path.join(__dirname, 'products')));

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

app.use(compression());

app.use('/api/v1/products', productRouter);
app.use('/api/v1/users', userRouter);

app.use((req, res, next) => {
  console.log(`Incoming request: ${req.method} ${req.path}`);
  next();
});

app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);

module.exports = app;
