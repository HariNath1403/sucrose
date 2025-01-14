const mongoose = require('mongoose');
const dotenv = require('dotenv');

process.on('uncaughtException', (err) => {
  console.log('ERROR!, Shutting down...');
  console.log(err.name, err.message);
  process.exit(1);
});

dotenv.config({
  path: './config.env',
});

const app = require('./app');

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD,
);

const port = process.env.PORT || 3000;

mongoose
  .connect(DB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(async () => {
    console.log('DB is connected successfully');
  })
  .catch((err) => {
    console.error('DB connection error:', err);
  });

const server = app.listen(port, () => {
  console.log(`App is running on port: ${port}`);
});

process.on('unhandledRejection', (err) => {
  console.log(err.name, err.message);
  console.log('ERROR!, Shutting down...');
  server.close(() => {
    process.exit(1);
  });
});
