/* eslint-disable */

import Master from '../master.js';

class ProductViews extends Master {
  _cookies = [];

  _cakes = [];

  async loadResponses(url) {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }
    const data = await response.json();

    this.sortData(data.data.products);
    this.clearRows();
    this.generateMarkup(this._cookies, 'Cookies');
    this.generateMarkup(this._cakes, 'Cakes');
  }

  sortData(arr) {
    const activeItems = arr.filter((item) => item.status === 'active');

    activeItems.forEach((item) => {
      const itemArr = [
        item.image,
        item.name,
        item.price,
        item.priceAfterDiscount,
        item.validEndDate,
        item.slug,
      ];

      if (item.type === 'Cookies') {
        this._cookies.push(itemArr);
      } else {
        this._cakes.push(itemArr);
      }
    });
  }

  clearRows() {
    this.rowCookies.innerHTML = '';
    this.rowCakes.innerHTML = '';
  }

  generateDiscountedMarkup(price, priceAfterDiscount, validity) {
    let markup;
    if (price === priceAfterDiscount) {
      markup = `<h4 class="product__container--box--price">RM${price}</h4>`;
    } else {
      markup = `<h4
              class="product__container--box--price product__container--box--price--old"
            >
              RM${price}
            </h4>
            <h4
              class="product__container--box--price product__container--box--price--promo"
            >
              RM${priceAfterDiscount}
            </h4>
            <h4 class="product__container--box--validity">
              PROMO UNTIL ${validity}
            </h4>`;
    }
    return markup;
  }

  generateIndMarkup(el) {
    const image = el[0];
    const itemName = el[1];
    const price = el[2];
    const priceAfterDiscount = el[3];
    let validity = el[4];
    const slug = el[5];

    if (validity) {
      validity = this.formatDate(validity);
    }

    const priceMarkup = this.generateDiscountedMarkup(
      price,
      priceAfterDiscount,
      validity,
    );

    const markup = `<div class="product__container--box">
            <img
              src="products/${image}"
              alt="${slug}"
              class="product__container--box--img"
              data-name="${slug}"
            />
            <h3 class="product__container--box--name">${itemName}</h3>
            ${priceMarkup}
          </div>`;

    return markup;
  }

  generateMarkup(arr, location) {
    const markup = arr.map((el) => this.generateIndMarkup(el)).join('');

    if (location === 'Cookies') {
      this.rowCookies.insertAdjacentHTML('beforeend', markup);
    } else if (location === 'Cakes') {
      this.rowCakes.insertAdjacentHTML('beforeend', markup);
    }
  }

  eventHandler(handler) {
    document.addEventListener('DOMContentLoaded', () => {
      // console.log('Document has loaded successfully');
      handler();
    });
  }
}

export default new ProductViews();
