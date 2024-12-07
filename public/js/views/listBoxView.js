/* eslint-disable */

import * as helper from '../helper.js';
import Master from '../master.js';

class ListBoxView extends Master {
  _cookies = {
    name: [],
    price: [],
    id: [],
  };
  _cakes = {
    name: [],
    price: [],
    id: [],
  };
  _inactive = {
    name: [],
    price: [],
    id: [],
  };

  _formProdName = document.getElementById('new-prod-name');
  _formProdDesc = document.getElementById('new-prod-desc');
  _formProdAdd = document.getElementById('new-prod-add');
  _formProdPrice = document.getElementById('new-prod-price');
  _formProdDiscount = document.getElementById('new-prod-discount');
  _formProdStart = document.getElementById('new-prod-start-discount');
  _formProdEnd = document.getElementById('new-prod-end-discount');
  _formProdStatusRadio = document.querySelectorAll('input[name="status"]');
  _formProdTypeRadio = document.querySelectorAll('input[name="type"]');
  _formProdImg = document.getElementById('new-prod-image');
  _previewLabel = document.getElementById('img-preview-label');
  _previewImg = document.getElementById('img-preview-img');

  async loadResponses(url, listBxQuery) {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }
    const data = await response.json();

    this._cookies = {
      name: [],
      price: [],
      id: [],
    };
    this._cakes = {
      name: [],
      price: [],
      id: [],
    };
    this._inactive = {
      name: [],
      price: [],
      id: [],
    };

    if (!listBxQuery) {
      this.getDataCookies(data.data.products, '');
      this.getDataCakes(data.data.products, '');
      this.getDataInactive(data.data.products, '');
    } else {
      this.getDataCookies(data.data.products, listBxQuery);
      this.getDataCakes(data.data.products, listBxQuery);
      this.getDataInactive(data.data.products, listBxQuery);
    }

    this.clearInnerContent();

    const cookieTableData = this.generateMarkup(this._cookies);
    const cakeTableData = this.generateMarkup(this._cakes);
    const inactiveTableData = this.generateMarkup(this._inactive);

    this.generateListBox(this.listBoxCookies, cookieTableData);
    this.generateListBox(this.listBoxCakes, cakeTableData);
    this.generateListBox(this.listBoxInactive, inactiveTableData);
  }

  pushDataForView(dict, item) {
    dict.name.push(item.name);
    dict.price.push(item.priceAfterDiscount);
    dict.id.push(item._id);
  }

  getDataCookies(arr, query) {
    let targetArr;
    targetArr = arr.filter((item) => item.status === 'active');
    targetArr = targetArr.filter((item) => item.type === 'Cookies');
    targetArr = targetArr.filter((item) =>
      item.name.toLowerCase().includes(query.toLowerCase()),
    );

    targetArr.sort((item) => item.createdAt);

    targetArr.forEach((cookie) => {
      this.pushDataForView(this._cookies, cookie);
    });
  }

  getDataCakes(arr, query) {
    let targetArr;
    targetArr = arr.filter((item) => item.status === 'active');
    targetArr = targetArr.filter((item) => item.type !== 'Cookies');
    targetArr = targetArr.filter((item) =>
      item.name.toLowerCase().includes(query.toLowerCase()),
    );

    targetArr.sort((item) => item.createdAt);

    targetArr.forEach((cake) => {
      this.pushDataForView(this._cakes, cake);
    });
  }

  getDataInactive(arr, query) {
    let targetArr;
    targetArr = arr.filter((item) => item.status !== 'active');
    targetArr = targetArr.filter((item) =>
      item.name.toLowerCase().includes(query.toLowerCase()),
    );

    targetArr.forEach((item) => {
      this.pushDataForView(this._inactive, item);
    });
  }

  clearInnerContent() {
    const allSpinners = document.querySelectorAll('#spinner');

    this.listBoxCookies.innerHTML = '';
    this.listBoxCakes.innerHTML = '';
    this.listBoxInactive.innerHTML = '';

    allSpinners.forEach((el) => (el.style.display = 'none'));
  }

  bodyCodeTemplate(no, id, name, price) {
    return `<tr>
                  <td>${no + 1}</td>
                  <td
                    class="interface__listbox--table--link"
                    data-id="${id}"
                  >
                    ${name}
                  </td>
                  <td>RM${price}</td>
                </tr>`;
  }

  generateMarkup(dict) {
    const headerSnippet = `<thead class="interface__listbox--table--header">
                <th class="interface__listbox--table--header--no">No</th>
                <th class="interface__listbox--table--header--name">Name</th>
                <th class="interface__listbox--table--header--price">Price</th>
              </thead>`;

    const bodyCodeSnippet = [];
    for (let i = 0; i < dict.id.length; i++) {
      const itemId = dict.id[i];
      const itemName = dict.name[i];
      const itemPrice = dict.price[i];

      bodyCodeSnippet.push(
        this.bodyCodeTemplate(i, itemId, itemName, itemPrice),
      );
    }

    const bodySnippet = `<tbody class="interface__listbox--table--body">
               ${bodyCodeSnippet.join('')}
              </tbody>`;

    return [headerSnippet, bodySnippet];
  }

  generateListBox(table, arr) {
    table.insertAdjacentHTML('beforeend', arr.join(''));
  }

  getItemId(e) {
    if (!e.target.classList.contains('interface__listbox--table--link')) return;
    const id = e.target.dataset.id;
    return id;
  }

  async getItemData(url, id) {
    const response = await fetch(`${url}/${id}`);

    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }
    const data = await response.json();

    const item = data.data.data;
    return item;
  }

  loadProdForm() {
    helper.adminInterface.style.display = 'none';
    helper.newProductForm.style.display = 'block';
    helper.prodFormHeader.textContent = 'Update Item';

    helper.scrollToTop();

    helper.btnProdFormSave.classList.add('catalogue__command--btn--hide');
    helper.btnProdFormPatch.classList.remove('catalogue__command--btn--hide');
  }

  transferDataToForm(data) {
    // For Input boxes
    this._formProdName.value = data.name;
    this._formProdDesc.value = data.description;
    this._formProdAdd.value = data?.addtional || '';
    this._formProdPrice.value = data.price;
    this._formProdDiscount.value = data?.discount || '';
    if (this._formProdDiscount.value) {
      this._formProdStart.value =
        helper.reformatDate(data?.validStartDate) || '';
      this._formProdEnd.value = helper.reformatDate(data?.validEndDate) || '';
    }

    // For Image
    [this._previewLabel, this._previewImg].forEach(
      (el) => (el.style.display = 'block'),
    );
    this._previewImg.src = `products/${data.image}`;
    this._previewImg.alt = `Image for ${data.name}`;

    // For Radio Inputs
    this._formProdStatusRadio.forEach((radio) => {
      if (radio.value === data.status) {
        radio.checked = true;
      }
    });
    this._formProdTypeRadio.forEach((radio) => {
      if (radio.value === data.type) {
        radio.checked = true;
      }
    });
  }

  hidePreviewImgs() {
    [this._previewLabel, this._previewImg].forEach(
      (el) => (el.style.display = 'none'),
    );
  }

  getFormData(data) {
    const keys = [];
    const vals = [];
    let curImg = '';

    // For Input boxes
    if (this._formProdName.value !== data.name) {
      keys.push('name');
      vals.push(this._formProdName.value);
    }
    if (this._formProdDesc.value !== data.description) {
      keys.push('description');
      vals.push(this._formProdDesc.value);
    }
    if (
      this._formProdAdd.value &&
      this._formProdAdd.value !== data?.addtional
    ) {
      keys.push('additional');
      vals.push(this._formProdAdd.value);
    }
    if (+this._formProdPrice.value !== data.price) {
      keys.push('price');
      vals.push(+this._formProdPrice.value);
    }
    if (
      this._formProdDiscount.value &&
      +this._formProdDiscount.value !== data?.discount
    ) {
      keys.push('discount');
      vals.push(+this._formProdDiscount.value);
    }
    if (
      this._formProdStart.value &&
      this._formProdStart.value !== helper.reformatDate(data?.validStartDate)
    ) {
      keys.push('validStartDate');
      vals.push(this._formProdStart.value);
    }
    if (
      this._formProdEnd.value &&
      this._formProdEnd.value !== helper.reformatDate(data?.validEndDate)
    ) {
      keys.push('validEndDate');
      vals.push(this._formProdEnd.value);
    }

    // For Radio Inputs
    this._formProdTypeRadio.forEach((radio) => {
      if (radio.checked) {
        if (radio.value !== data.type) {
          keys.push('type');
          vals.push(radio.value);
        }
      }
    });
    this._formProdStatusRadio.forEach((radio) => {
      if (radio.checked) {
        if (radio.value !== data.status) {
          keys.push('status');
          vals.push(radio.value);
        }
      }
    });

    // For Image
    const newImg = helper.extractFileName(this._formProdImg.value) || '';

    if (newImg && newImg !== data.image) {
      curImg = newImg;
    }

    return [keys, vals, curImg];
  }

  getFilterListBoxKey(target) {
    const inputField = document.getElementById(`search-input-${target}`);
    const filterQuery = inputField.value;

    return filterQuery;
  }

  async filterListBox(url, query) {
    await this.loadResponses(url, query);
  }

  eventHandlerLoaded(handler) {
    document.addEventListener('DOMContentLoaded', () => {
      handler();
    });
  }

  handlerLoadUpdateForm(handler) {
    const tableBodies = document.querySelectorAll('.interface__listbox--table');

    tableBodies.forEach((table) => {
      table.addEventListener('click', (e) => {
        return handler(e);
      });
    });
  }

  handlerUpdateProd(handler) {
    helper.btnProdFormPatch.addEventListener('click', (e) => {
      e.preventDefault();
      handler();
    });
  }

  handlerFilterListBoxes(handler) {
    const listBoxesSearchBtn = document.querySelectorAll(
      '.interface__search--btn',
    );

    listBoxesSearchBtn.forEach((btn) =>
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const element = e.target.id || e.target.closest('button').id;
        const id = element.split('search-btn-')[1];
        this.clearInnerContent();

        return handler(id);
      }),
    );
  }
}

export default new ListBoxView();
