/* eslint-disable */

// Backend Data
// export const APIUrl = 'http://127.0.0.1:3000/api/v1/products';
export const APIUrl = '/api/v1/products';
export const userUrl = '/api/v1/users';
export const masterUrl = '/api/v1/users/67478ebfa955bca12225ff9c';

// Index.html features
export const featureImages = ['hero-1', 'hero-2', 'hero-3', 'hero-4'];

// User Form
export const adminInterface = document.getElementById('interface');
export const newProductForm = document.getElementById('catalogue');
export const formErrorPage = document.getElementById('form-error');

export const prodFormHeader = document.querySelector('.catalogue__header');

export const btnReturnToHome = document.querySelector('.interface__exit--btn');
export const btnProdFormExit = document.querySelector('.catalogue__exit--btn');
export const btnProdFormClear = document.querySelector(
  '.catalogue__command--btn--clear',
);
export const btnProdFormSave = document.querySelector(
  '.catalogue__command--btn--save',
);
export const btnProdFormPatch = document.querySelector(
  '.catalogue__command--btn--update',
);

export function scrollToTop() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth',
  });
}

const formProdName = document.getElementById('new-prod-name');
const formProdDesc = document.getElementById('new-prod-desc');
const formProdAdd = document.getElementById('new-prod-add');
const formProdPrice = document.getElementById('new-prod-price');
const formProdDiscount = document.getElementById('new-prod-discount');
const formProdStart = document.getElementById('new-prod-start-discount');
const formProdEnd = document.getElementById('new-prod-end-discount');
export const formProdImg = document.getElementById('new-prod-image');
export const productFormInputs = [
  formProdName,
  formProdDesc,
  formProdAdd,
  formProdPrice,
  formProdDiscount,
  formProdStart,
  formProdEnd,
  formProdImg,
];

export function extractFileName(filePath) {
  return filePath.split('\\').pop();
}

export function reformatDate(dateString) {
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();

  return `${year}-${month}-${day}`;
}
