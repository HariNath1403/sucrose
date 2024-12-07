/* eslint-disable */

import Master from '../master.js';

class Admin extends Master {
  _loginExitBtn = document.querySelector('.login__exit--btn');
  _loginBtn = document.querySelector('.login__form--submit--btn');

  exitLoginPage() {
    window.location.href = '/';
  }

  async getLoginInfo(url) {
    try {
      const response = await fetch(url);

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          errorData.message ||
            'Failed to get user information. Please try again.',
        );
      }

      const data = await response.json();
      // console.log('User Information:', data);
      return data;
    } catch (err) {
      console.error('Error loading user information:', err.message);
      return '';
    }
  }

  validateLogin(userArr, pwArr, iconArr) {
    let validation = true;
    let image = false;

    const nameInput = document.getElementById('login-username');
    const passwordInput = document.getElementById('login-password');

    const index = userArr.indexOf(nameInput.value);

    validation = index > -1;
    validation = pwArr[index] === passwordInput.value;

    if (validation) {
      image = iconArr[index];
    }

    return [validation, image];
  }

  loadInterface() {
    this.userInterface.style.display = 'block';
    this.loginPg.style.display = 'none';
  }

  successfulLogin() {
    const nameInput = document.getElementById('login-username');
    const passwordInput = document.getElementById('login-password');

    const userName = nameInput.value;
    nameInput.value = passwordInput.value = '';

    this.loadInterface();

    return userName;
  }

  replaceAdminName(user, dp) {
    const adminUserName = document.getElementById('admin-user');
    adminUserName.innerHTML = '';

    const markup = `<span>Welcome</span>
          <span>${user}</span>
          <img
            src="images/user/${dp}"
            alt="user profile"
            class="interface__welcome--img"
          />`;

    adminUserName.insertAdjacentHTML('beforeend', markup);
  }

  handlerExitLoginPage(handler) {
    this._loginExitBtn.addEventListener('click', (e) => {
      e.preventDefault();
      handler();
    });
  }

  handlerLogin(handler) {
    this._loginBtn.addEventListener('click', (e) => {
      e.preventDefault();
      handler();
    });
  }
}

export default new Admin();
