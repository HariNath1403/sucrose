/* eslint-disable */

import * as helper from '../helper.js';
import Master from '../master.js';

class Product extends Master {
  _formProdStatusRadio = document.querySelectorAll('input[name="status"]');
  _formProdTypeRadio = document.querySelectorAll('input[name="type"]');

  _btnOpenNewProdForm = document.querySelector(
    '.interface__commands--btn--new',
  );

  _spinner = document.getElementById('form-spinner');
  _btnErrExit = document.querySelector('.error__exit--btn');

  _radioInputVals = [];
  _inputVals = [];
  _errMsgs = [];
  _obj = {};

  loadProdForm() {
    helper.newProductForm.style.display = 'block';
    helper.adminInterface.style.display = 'none';
    helper.prodFormHeader.textContent = 'Add 1 New Item';

    helper.scrollToTop();

    helper.btnProdFormSave.classList.remove('catalogue__command--btn--hide');
    helper.btnProdFormPatch.classList.add('catalogue__command--btn--hide');
  }

  exitPage() {
    // this.reloadAdminPage();
    helper.newProductForm.style.display = 'none';
    helper.adminInterface.style.display = 'block';
  }

  loadSpinner() {
    this._spinner.style.display = 'block';
  }

  hideSpinner() {
    this._spinner.style.display = 'none';
  }

  enableScrolling() {
    document.body.style.overflow = '';
  }

  disableScrolling() {
    document.body.style.overflow = 'hidden';
  }

  getRadioVals() {
    const errMsgType =
      Array.from(this._formProdTypeRadio).every((radio) => !radio.checked) &&
      'Make sure a type is selected';

    if (errMsgType) return this._errMsgs.push(errMsgType);

    Array.from(this._formProdStatusRadio).forEach((radio) => {
      if (radio.checked) {
        this._radioInputVals.push(radio.value);
      }
    });

    Array.from(this._formProdTypeRadio).forEach((radio) => {
      if (radio.checked) {
        this._radioInputVals.push(radio.value);
      }
    });
  }

  getInputVals() {
    helper.productFormInputs.forEach((input) => {
      this._inputVals.push(input.value);
    });
  }

  transferDataToObj() {
    this._obj['name'] = this._inputVals[0];
    this._obj['description'] = this._inputVals[1];
    this._obj['additional'] = this._inputVals[2];
    this._obj['price'] = this._inputVals[3];
    this._obj['discount'] = this._inputVals[4];
    this._obj['startDiscount'] = this._inputVals[5];
    this._obj['endDiscount'] = this._inputVals[6];
    this._obj['image'] = helper.extractFileName(this._inputVals[7]);
    this._obj['type'] = this._radioInputVals[1];
    this._obj['status'] = this._radioInputVals[0];
  }

  addData() {
    this._inputVals.length = 0;
    this.loadSpinner();
    this.getRadioVals();
    this.getInputVals();
    this.transferDataToObj();

    return this._obj;
  }

  compileDataToPost(user, obj) {
    let formData = new FormData();
    formData.append('user', user);
    formData.append('name', obj['name']);
    formData.append('type', obj['type']);
    formData.append('description', obj['description']);
    formData.append('additional', obj['additional']);
    formData.append('status', obj['status']);
    formData.append('price', obj['price']);
    formData.append('discount', obj['discount']);
    formData.append('validStartDate', obj['startDiscount']);
    formData.append('validEndDate', obj['endDiscount']);

    const imageInput = document.querySelector('input[name="product-image"]');
    if (imageInput.files.length > 0) {
      formData.append('product-image', imageInput.files[0]);
    }

    return formData;
  }

  clearData() {
    helper.productFormInputs.forEach((input) => {
      input.value = '';
    });
    this._formProdStatusRadio.forEach((radio) => (radio.checked = false));
    this._formProdTypeRadio.forEach((radio) => (radio.checked = false));

    const activeRadio = document.querySelector(
      'input[name="status"][value="active"]',
    );

    if (activeRadio) {
      activeRadio.checked = true;
    }
  }

  renewForm(process) {
    this.clearData();
    this.hideSpinner();
    alert(`Data ${process} successfully!`);
  }

  errorMessage(sampleTxt) {
    const allMessages = [];

    if (!sampleTxt.includes('Product validation failed: ')) {
      allMessages.push(`1. ${sampleTxt}`);
      return allMessages;
    }

    const errors = sampleTxt.split('Product validation failed: ')[1];
    const errorList = errors.split(', ');

    errorList.map((error, index) => {
      const [field, message] = error.split(': ');
      const capitalizedField = field.charAt(0).toUpperCase() + field.slice(1);

      allMessages.push(`${index + 1}. ${capitalizedField}: ${message}.`);
    });
    return allMessages;
  }

  generateErrorMarkup(textArr) {
    const errTxtBx = document.querySelector('.error__text');
    errTxtBx.innerHTML = '';

    const markup = textArr
      .map((txt) => `<li class="error__text--line">${txt}</li>`)
      .join('');

    errTxtBx.insertAdjacentHTML('beforeend', markup);
  }

  loadErrorPage(err) {
    const allErrs = this.errorMessage(err);
    this.generateErrorMarkup(allErrs);
    this.disableScrolling();
    helper.formErrorPage.style.display = 'block';
  }

  closeErrorPage() {
    this.enableScrolling();
    helper.formErrorPage.style.display = 'none';
  }

  returnToHomePage() {
    window.location.href = '/';
  }

  reloadAdminPage() {
    window.location.href = '/admin.html';
  }

  handlerLoadForm(handler) {
    this._btnOpenNewProdForm.addEventListener('click', (e) => {
      e.preventDefault();
      handler();
    });
  }

  handlerExitPage(handler) {
    helper.btnProdFormExit.addEventListener('click', (e) => {
      e.preventDefault();
      handler();
    });
  }

  handlerClearForm(handler) {
    helper.btnProdFormClear.addEventListener('click', (e) => {
      e.preventDefault();
      handler();
    });
  }

  handlerSaveData(handler) {
    helper.btnProdFormSave.addEventListener('click', (e) => {
      e.preventDefault();
      handler();
    });
  }

  handlerReturnToHomePage(handler) {
    helper.btnReturnToHome.addEventListener('click', (e) => {
      e.preventDefault();
      handler();
    });
  }

  handlerExitErrorPage(handler) {
    this._btnErrExit.addEventListener('click', (e) => {
      e.preventDefault();
      handler();
    });
  }
}

export default new Product();
