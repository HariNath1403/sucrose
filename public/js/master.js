/* eslint-disable */

export default class Master {
  // Features Swapping Images
  featuresFigureMain = document.querySelector('.features__figure--main');
  featuresFigureOthers = document.querySelector('.features__figure--others');

  // Fetch Product Information
  rowCookies = document.getElementById('container-cookies');
  rowCakes = document.getElementById('container-cakes');

  // Listbox Elements
  listBoxCookies = document.getElementById('listbox-cookies');
  listBoxCakes = document.getElementById('listbox-cakes');
  listBoxInactive = document.getElementById('listbox-inactive');

  // Pages (Login - Admin)
  loginPg = document.getElementById('login');
  userInterface = document.getElementById('interface');
  userForm = document.getElementById('new-user');

  // formatting Dates
  formatDate(timestamp) {
    const fullDate =
      typeof timestamp === 'string' ? new Date(timestamp) : timestamp;

    const day = String(fullDate.getUTCDate()).padStart(2, '0');
    const month = String(fullDate.getUTCMonth() + 1).padStart(2, '0');
    const year = String(fullDate.getUTCFullYear()).slice(-2);

    const formattedDate = `${day}-${month}-${year}`;

    return formattedDate;
  }
}
