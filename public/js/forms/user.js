/* eslint-disable */

import Master from '../master.js';
import * as helper from '../helper.js';

class User extends Master {
  _btnFormNewUser = document.querySelector(
    '.interface__commands--btn--newuser',
  );
  _btnFormUpdateUser = document.querySelector(
    '.interface__commands--btn--change',
  );
  _btnExitUserForm = document.querySelector('.user__exit--btn');

  _btnCreateNewUser = document.getElementById('user-create');
  _btnUpdateCurUser = document.getElementById('user-update');

  resetActiveIcon() {
    const iconBox = document.querySelector('.user__form--images');
    const markup = `<img
                src="images/user/active-kola.png"
                alt="Logo"
                data-img="kola.png"
                class="user__form--images--icon user__form--images--icon--active"
              />
              <img
                src="images/user/star.png"
                alt="Logo"
                data-img="star.png"
                class="user__form--images--icon"
              />
              <img
                src="images/user/boat.png"
                alt="Logo"
                data-img="boat.png"
                class="user__form--images--icon"
              />
              <img
                src="images/user/mask.png"
                alt="Logo"
                data-img="mask.png"
                class="user__form--images--icon"
              />
              <img
                src="images/user/rocket.png"
                alt="Logo"
                data-img="rocket.png"
                class="user__form--images--icon"
              />`;

    iconBox.innerHTML = '';
    iconBox.insertAdjacentHTML('beforeend', markup);
  }

  clearUserForm() {
    const adminName = document.getElementById('admin-name');
    const desc = document.getElementById('admin-desc');
    const password = document.getElementById('admin-password');
    const passwordConfirm = document.getElementById('admin-password-confirm');
    const master = document.getElementById('admin-password-master');

    adminName.value =
      desc.value =
      password.value =
      passwordConfirm.value =
      master.value =
        '';
    this.resetActiveIcon();
  }

  closeUserForm() {
    this.userForm.style.display = 'none';
    this.userInterface.style.display = 'block';

    this.clearUserForm();
  }

  async getUserInfo(url, user) {
    let allData = '';
    let id = '';

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
      allData = data.data.users;
    } catch (err) {
      console.error('Error loading user information:', err.message);
      return id;
    }

    allData.forEach((admin) => {
      if (admin.user === user) {
        id = admin._id;
      }
    });

    return id;
  }

  async loadUserForm(type, url, user) {
    let id = '';
    const masterEls = document.querySelectorAll('.user__form--create');

    this.userForm.style.display = 'block';
    this.userInterface.style.display = 'none';
    window.scrollTo(0, 0);

    if (type === 'patch') {
      this._btnCreateNewUser.classList.add('user__form--submit--hide');
      this._btnUpdateCurUser.classList.remove('user__form--submit--hide');
      masterEls.forEach((el) => (el.style.display = 'none'));
      id = await this.getUserInfo(url, user);
    } else {
      this._btnCreateNewUser.classList.remove('user__form--submit--hide');
      this._btnUpdateCurUser.classList.add('user__form--submit--hide');
      masterEls.forEach((el) => (el.style.display = 'block'));
    }

    return id;
  }

  loadIcon(img) {
    const iconBox = document.querySelector('.user__form--images');
    const allIcons = [
      'kola.png',
      'star.png',
      'boat.png',
      'mask.png',
      'rocket.png',
    ];

    const markupSnippetNormal = function (img) {
      return `<img
                src="images/user/${img}"
                alt="Logo"
                data-img="${img}"
                class="user__form--images--icon"
              />`;
    };

    const markupSnippetActive = function (img) {
      return `<img
                src="images/user/active-${img}"
                alt="Logo"
                data-img="${img}"
                class="user__form--images--icon user__form--images--icon--active"
              />`;
    };

    const allMarkups = allIcons
      .map((icon) =>
        icon === img ? markupSnippetActive(icon) : markupSnippetNormal(icon),
      )
      .join('');

    iconBox.innerHTML = '';
    iconBox.insertAdjacentHTML('beforeend', allMarkups);

    this.handlerSwapIcons((imgName) => this.swapIconsWithClicks(imgName));
  }

  async preLoadFormInfo(url, id) {
    const adminName = document.getElementById('admin-name');
    const desc = document.getElementById('admin-desc');
    let admin = '';
    let icon = 'kola.png';

    try {
      const response = await fetch(`${url}/${id}`);

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          errorData.message ||
            'Failed to get user information. Please try again.',
        );
      }

      const data = await response.json();
      admin = data.data.user;
    } catch (err) {
      console.error('Error loading user information:', err.message);
      return '';
    }

    adminName.value = admin.user;
    desc.value = admin.description || '';
    icon = admin.image;

    this.loadIcon(icon);
  }

  async validateMaster(password) {
    const masterUrl = helper.masterUrl;
    let admin;

    try {
      const response = await fetch(masterUrl);

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          errorData.message ||
            'Failed to get user information. Please try again.',
        );
      }

      const data = await response.json();
      admin = data.data.user;
    } catch (err) {
      console.error('Error loading user information:', err.message);
      return false;
    }

    if (admin.password === password) {
      return true;
    } else {
      return false;
    }
  }

  async createNewUserCompilation() {
    const adminName = document.getElementById('admin-name');
    const desc = document.getElementById('admin-desc');
    const password = document.getElementById('admin-password');
    const passwordConfirm = document.getElementById('admin-password-confirm');
    const master = document.getElementById('admin-password-master');

    const activeIcon = document.querySelector(
      '.user__form--images--icon--active',
    );
    const userImg = activeIcon ? activeIcon.dataset.img : 'kola.png';

    const masterPw = await this.validateMaster(master.value);

    if (!masterPw) return false;
    else {
      const formBody = {
        user: adminName.value,
        image: userImg,
        description: desc.value,
        password: password.value,
        passwordConfirm: passwordConfirm.value,
      };

      return formBody;
    }
  }

  async getOldInfo(url, id) {
    try {
      const response = await fetch(`${url}/${id}`);

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          errorData.message ||
            'Failed to get user information. Please try again.',
        );
      }

      const data = await response.json();
      const dbUser = data.data.user;
      return dbUser;
    } catch (err) {
      console.error('Error loading user information:', err.message);
      return '';
    }
  }

  patchCurUserCompilation(dbUser) {
    const adminName = document.getElementById('admin-name');
    const desc = document.getElementById('admin-desc');
    const password = document.getElementById('admin-password');
    const passwordConfirm = document.getElementById('admin-password-confirm');

    const activeIcon = document.querySelector(
      '.user__form--images--icon--active',
    );
    const userImg = activeIcon ? activeIcon.dataset.img : '';

    const formBody = {
      user: adminName.value || dbUser.user,
      image: userImg || dbUser.image,
      description: desc.value || dbUser.description,
      password: password.value || dbUser.password,
    };

    if (password.value) {
      formBody.passwordConfirm = passwordConfirm.value || password.value;
    }

    return formBody;
  }

  handlerCloseUserForm(handler) {
    this._btnExitUserForm.addEventListener('click', (e) => {
      e.preventDefault();
      handler();
    });
  }

  handlerOpenNewUserForm(handler) {
    this._btnFormNewUser.addEventListener('click', (e) => {
      e.preventDefault();
      handler();
    });
  }

  handlerUpdateUserForm(handler) {
    this._btnFormUpdateUser.addEventListener('click', (e) => {
      e.preventDefault();
      handler();
    });
  }

  swapIconsWithClicks(target) {
    this.loadIcon(target);
  }

  handlerSwapIcons(handler) {
    const allIcons = document.querySelectorAll('.user__form--images--icon');
    allIcons.forEach((icon) => {
      icon.addEventListener('click', (e) => {
        const icon = e.target.dataset.img;

        return handler(icon);
      });
    });
  }

  handlerCreateNewUser(handler) {
    this._btnCreateNewUser.addEventListener('click', (e) => {
      e.preventDefault();
      handler();
    });
  }

  handlerPatchCurUser(handler) {
    this._btnUpdateCurUser.addEventListener('click', (e) => {
      e.preventDefault();
      handler();
    });
  }
}

export default new User();
