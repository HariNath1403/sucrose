/* eslint-disable*/

import Master from '../master.js';
import { featureImages } from '../helper.js';

class FeatureViews extends Master {
  generateMarkupSnippet(img) {
    return `<img
            src="/images/${img}.jpeg"
            alt="Cookies"
            class="features__figure--others--img"
            data-name="${img}"
          />`;
  }
  generateMarkup(img) {
    const allImgs = [...featureImages];
    const markupMain = `<img
            src="/images/${img}.jpeg"
            alt="Cookies"
            class="features__figure--main--img"
          />`;
    const otherImgs = allImgs.filter((el) => el !== img);
    const markupOthers = otherImgs
      .map((el) => this.generateMarkupSnippet(el))
      .join('');

    return [markupMain, markupOthers];
  }
  clearExistingImgs() {
    this.featuresFigureMain.innerHTML = this.featuresFigureOthers.innerHTML =
      '';
  }
  switchImgs(img) {
    this.clearExistingImgs();
    const markups = this.generateMarkup(img);

    this.featuresFigureMain.insertAdjacentHTML('beforeend', markups[0]);
    this.featuresFigureOthers.insertAdjacentHTML('beforeend', markups[1]);
  }
  handlerSelectImg(handler) {
    this.featuresFigureOthers.addEventListener('click', (ev) => {
      const target = ev.target.getAttribute('data-name');

      if (!target) return;
      handler(target);
    });
  }
}

export default new FeatureViews();
