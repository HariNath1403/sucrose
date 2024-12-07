/* eslint-disable */

import featureView from './views/featureView.js';
import productView from './views/productView.js';

import { APIUrl } from './helper.js';

// Feature Images
const swapFeatureImages = function (img) {
  featureView.switchImgs(img);
};

// Fetch Product Data
const loadProductInformation = async function () {
  productView.loadResponses(APIUrl);
};

const initLoadWebpage = function () {
  featureView.handlerSelectImg((target) => {
    swapFeatureImages(target);
  });
  productView.eventHandler(() => {
    loadProductInformation();
  });
};

initLoadWebpage();
