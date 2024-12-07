/* eslint-disable */

import listBoxView from './views/listBoxView.js';
import formProduct from './forms/product.js';
import formLogin from './forms/login.js';
import formUser from './forms/user.js';

import { APIUrl, userUrl, formProdImg } from './helper.js';

let user = 'Guest';
let userId = '';

// Admin Interface
let curData;
let productId;

const loadListBoxData = async function () {
  await listBoxView.loadResponses(APIUrl, '');
};

const loadUpdateForm = async function (e) {
  productId = listBoxView.getItemId(e);
  curData = await listBoxView.getItemData(APIUrl, productId);
  listBoxView.loadProdForm();
  listBoxView.transferDataToForm(curData);
};

const updateProd = async function () {
  const [keyNames, keyValues, newImgSrc] = listBoxView.getFormData(curData);

  const formData = new FormData();
  keyNames.forEach((key, i) => {
    formData.append(key, keyValues[i]);
  });

  if (newImgSrc) {
    const newImg = formProdImg.files[0];
    formData.append('product-image', newImg);
  }

  try {
    const response = await fetch(`${APIUrl}/${productId}`, {
      method: 'PATCH',
      body: formData,
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(
        errorData.message || 'Failed to update the product. Please try again.',
      );
    }

    const data = await response.json();
    console.log('Product updated successfully:', data);

    formProduct.renewForm('updated');
    listBoxView.hidePreviewImgs();
    formProduct.exitPage();
    await loadListBoxData();
  } catch (err) {
    console.error('Error updating the product:', err.message);
    formProduct.loadErrorPage(err.message);
  }
};

const initAdminPage = function () {
  listBoxView.eventHandlerLoaded(loadListBoxData);
  listBoxView.handlerLoadUpdateForm(loadUpdateForm);
  listBoxView.handlerUpdateProd(updateProd);
};

initAdminPage();

// UserForms
const loadProductForm = function () {
  formProduct.loadProdForm();
};
const exitProductForm = function () {
  formProduct.exitPage();
};

const closeErrorMsgPage = function () {
  formProduct.closeErrorPage();
};

const clearProductForm = function () {
  formProduct.clearData();
};

const saveProductForm = async function () {
  try {
    const productObj = formProduct.addData();

    const formData = formProduct.compileDataToPost(user, productObj);

    const response = await fetch(`${APIUrl}/upload`, {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(
        errorData.message || 'Failed to save product. Please try again.',
      );
    }

    const data = await response.json();
    console.log('Product saved successfully:', data);

    formProduct.renewForm('added');
    await loadListBoxData();
  } catch (err) {
    console.error('Error saving product:', err.message);
    formProduct.hideSpinner();
    formProduct.loadErrorPage(err.message);
  }
};

const backToHomePage = function () {
  formProduct.returnToHomePage();
};

const initUserForms = function () {
  formProduct.handlerLoadForm(loadProductForm);
  formProduct.handlerExitPage(exitProductForm);
  formProduct.handlerExitErrorPage(closeErrorMsgPage);
  formProduct.handlerClearForm(clearProductForm);
  formProduct.handlerSaveData(saveProductForm);
  formProduct.handlerReturnToHomePage(backToHomePage);
};

initUserForms();

// ListBoxes
const runListBoxFilter = async function (target) {
  const keyQuery = listBoxView.getFilterListBoxKey(target);
  await listBoxView.filterListBox(APIUrl, keyQuery);
};

const initListBox = function () {
  listBoxView.handlerFilterListBoxes(runListBoxFilter);
};

initListBox();

// Login Form

const exitLoginForm = function () {
  formLogin.exitLoginPage();
};

const loginUser = async function (url) {
  const allUsers = [];
  const allPws = [];
  const allIcons = [];

  const allData = await formLogin.getLoginInfo(url);
  const data = allData?.data.users;
  data.forEach((admin) => {
    allUsers.push(admin.user);
    allPws.push(admin.password);
    allIcons.push(admin.image);
  });

  const validate = formLogin.validateLogin(allUsers, allPws, allIcons)[0];
  const userDp = formLogin.validateLogin(allUsers, allPws, allIcons)[1];

  if (validate) {
    user = formLogin.successfulLogin();
    formLogin.replaceAdminName(user, userDp);
  }
};

const initUserLoginForm = function () {
  formLogin.handlerExitLoginPage(exitLoginForm);
  formLogin.handlerLogin(() => {
    loginUser(userUrl);
  });
};

initUserLoginForm();

// Settings & Add New User
const closeUserAdminForm = function () {
  formUser.closeUserForm();
};

const openCreateUserForm = async function (type, url, user) {
  await formUser.loadUserForm(type, url, user);
  formUser.handlerSwapIcons((imgName) => formUser.swapIconsWithClicks(imgName));
};

const openUpdateUserForm = async function (type, url, user) {
  userId = await formUser.loadUserForm(type, url, user);
  await formUser.preLoadFormInfo(url, userId);
  formUser.handlerSwapIcons((imgName) => formUser.swapIconsWithClicks(imgName));
};

const saveNewUser = async function () {
  try {
    const formBody = await formUser.createNewUserCompilation();
    if (!formBody) {
      throw new Error('Failed to save user. Admin password is REQUIRED.');
    }

    const response = await fetch(userUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formBody),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(
        errorData.message || 'Failed to save user. Please try again.',
      );
    }
    const data = await response.json();
    console.log('User saved successfully:', data);
    formProduct.reloadAdminPage();
  } catch (err) {
    console.error('Error saving user:', err.message);
    formProduct.loadErrorPage(err.message);
  }
};

const patchCurrentUser = async function () {
  try {
    userId = await formUser.getUserInfo(userUrl, user);
    const dbUser = await formUser.getOldInfo(userUrl, userId);
    console.log(dbUser);
    const formBody = formUser.patchCurUserCompilation(dbUser);
    console.log(formBody);

    const response = await fetch(`${userUrl}/${userId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formBody),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(
        errorData.message || 'Failed to update user. Please try again.',
      );
    }

    const data = await response.json();
    console.log('User updated successfully:', data);

    formProduct.reloadAdminPage();
  } catch (err) {
    console.error('Error updating user:', err.message);
    formProduct.loadErrorPage(err.message);
  }
};

const initSettings = function () {
  formUser.handlerCloseUserForm(closeUserAdminForm);

  formUser.handlerOpenNewUserForm(() =>
    openCreateUserForm('create', userUrl, user),
  );
  formUser.handlerUpdateUserForm(() =>
    openUpdateUserForm('patch', userUrl, user),
  );
  formUser.handlerCreateNewUser(saveNewUser);
  formUser.handlerPatchCurUser(patchCurrentUser);
};

initSettings();
