parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"VAV0":[function(require,module,exports) {
"use strict";function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,i(n.key),n)}}function n(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function o(e,t,r){return(t=i(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(t){var r=u(t,"string");return"symbol"==e(r)?r:r+""}function u(t,r){if("object"!=e(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,r||"default");if("object"!=e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var a=exports.default=function(){return n(function e(){t(this,e),o(this,"featuresFigureMain",document.querySelector(".features__figure--main")),o(this,"featuresFigureOthers",document.querySelector(".features__figure--others")),o(this,"rowCookies",document.getElementById("container-cookies")),o(this,"rowCakes",document.getElementById("container-cakes")),o(this,"listBoxCookies",document.getElementById("listbox-cookies")),o(this,"listBoxCakes",document.getElementById("listbox-cakes")),o(this,"listBoxInactive",document.getElementById("listbox-inactive")),o(this,"loginPg",document.getElementById("login")),o(this,"userInterface",document.getElementById("interface")),o(this,"userForm",document.getElementById("new-user"))},[{key:"formatDate",value:function(e){var t="string"==typeof e?new Date(e):e,r=String(t.getUTCDate()).padStart(2,"0"),n=String(t.getUTCMonth()+1).padStart(2,"0"),o=String(t.getUTCFullYear()).slice(-2);return"".concat(r,"-").concat(n,"-").concat(o)}}])}();
},{}],"YaYI":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.btnReturnToHome=exports.btnProdFormSave=exports.btnProdFormPatch=exports.btnProdFormExit=exports.btnProdFormClear=exports.adminInterface=exports.APIUrl=void 0,exports.extractFileName=v,exports.productFormInputs=exports.prodFormHeader=exports.newProductForm=exports.masterUrl=exports.formProdImg=exports.formErrorPage=exports.featureImages=void 0,exports.reformatDate=_,exports.scrollToTop=x,exports.userUrl=void 0;var e=exports.APIUrl="/api/v1/products",t=exports.userUrl="/api/v1/users",r=exports.masterUrl="/api/v1/users/67478ebfa955bca12225ff9c",o=exports.featureImages=["hero-1","hero-2","hero-3","hero-4"],n=exports.adminInterface=document.getElementById("interface"),d=exports.newProductForm=document.getElementById("catalogue"),a=exports.formErrorPage=document.getElementById("form-error"),m=exports.prodFormHeader=document.querySelector(".catalogue__header"),c=exports.btnReturnToHome=document.querySelector(".interface__exit--btn"),p=exports.btnProdFormExit=document.querySelector(".catalogue__exit--btn"),s=exports.btnProdFormClear=document.querySelector(".catalogue__command--btn--clear"),u=exports.btnProdFormSave=document.querySelector(".catalogue__command--btn--save"),l=exports.btnProdFormPatch=document.querySelector(".catalogue__command--btn--update");function x(){window.scrollTo({top:0,left:0,behavior:"smooth"})}var i=document.getElementById("new-prod-name"),g=document.getElementById("new-prod-desc"),I=document.getElementById("new-prod-add"),f=document.getElementById("new-prod-price"),b=document.getElementById("new-prod-discount"),P=document.getElementById("new-prod-start-discount"),y=document.getElementById("new-prod-end-discount"),F=exports.formProdImg=document.getElementById("new-prod-image"),E=exports.productFormInputs=[i,g,I,f,b,P,y,F];function v(e){return e.split("\\").pop()}function _(e){var t=new Date(e),r=String(t.getDate()).padStart(2,"0"),o=String(t.getMonth()+1).padStart(2,"0"),n=t.getFullYear();return"".concat(n,"-").concat(o,"-").concat(r)}
},{}],"he3g":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=r(require("../master.js")),t=require("../helper.js");function r(e){return e&&e.__esModule?e:{default:e}}function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e){return c(e)||a(e)||u(e)||i()}function i(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function u(e,t){if(e){if("string"==typeof e)return f(e,t);var r={}.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?f(e,t):void 0}}function a(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}function c(e){if(Array.isArray(e))return f(e)}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,y(n.key),n)}}function p(e,t,r){return t&&l(e.prototype,t),r&&l(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function y(e){var t=b(e,"string");return"symbol"==n(t)?t:t+""}function b(e,t){if("object"!=n(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,t||"default");if("object"!=n(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}function m(e,t,r){return t=h(t),g(e,v()?Reflect.construct(t,r||[],h(e).constructor):t.apply(e,r))}function g(e,t){if(t&&("object"==n(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return d(e)}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function v(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch(e){}return(v=function(){return!!e})()}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function j(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&O(e,t)}function O(e,t){return(O=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}var w=function(r){function n(){return s(this,n),m(this,n,arguments)}return j(n,e.default),p(n,[{key:"generateMarkupSnippet",value:function(e){return'<img\n            src="/images/'.concat(e,'.jpeg"\n            alt="Cookies"\n            class="features__figure--others--img"\n            data-name="').concat(e,'"\n          />')}},{key:"generateMarkup",value:function(e){var r=this,n=o(t.featureImages);return['<img\n            src="/images/'.concat(e,'.jpeg"\n            alt="Cookies"\n            class="features__figure--main--img"\n          />'),n.filter(function(t){return t!==e}).map(function(e){return r.generateMarkupSnippet(e)}).join("")]}},{key:"clearExistingImgs",value:function(){this.featuresFigureMain.innerHTML=this.featuresFigureOthers.innerHTML=""}},{key:"switchImgs",value:function(e){this.clearExistingImgs();var t=this.generateMarkup(e);this.featuresFigureMain.insertAdjacentHTML("beforeend",t[0]),this.featuresFigureOthers.insertAdjacentHTML("beforeend",t[1])}},{key:"handlerSelectImg",value:function(e){this.featuresFigureOthers.addEventListener("click",function(t){var r=t.target.getAttribute("data-name");r&&e(r)})}}])}(),S=exports.default=new w;
},{"../master.js":"VAV0","../helper.js":"YaYI"}],"ZFq6":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t=e(require("../master.js"));function e(t){return t&&t.__esModule?t:{default:t}}function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function n(){n=function(){return e};var t,e={},o=Object.prototype,i=o.hasOwnProperty,a=Object.defineProperty||function(t,e,r){t[e]=r.value},c="function"==typeof Symbol?Symbol:{},u=c.iterator||"@@iterator",s=c.asyncIterator||"@@asyncIterator",f=c.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,r){return t[e]=r}}function h(t,e,r,n){var o=e&&e.prototype instanceof m?e:m,i=Object.create(o.prototype),c=new C(n||[]);return a(i,"_invoke",{value:P(t,r,c)}),i}function p(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=h;var y="suspendedStart",v="suspendedYield",d="executing",g="completed",b={};function m(){}function w(){}function _(){}var x={};l(x,u,function(){return this});var k=Object.getPrototypeOf,L=k&&k(k(N([])));L&&L!==o&&i.call(L,u)&&(x=L);var O=_.prototype=m.prototype=Object.create(x);function j(t){["next","throw","return"].forEach(function(e){l(t,e,function(t){return this._invoke(e,t)})})}function E(t,e){function n(o,a,c,u){var s=p(t[o],t,a);if("throw"!==s.type){var f=s.arg,l=f.value;return l&&"object"==r(l)&&i.call(l,"__await")?e.resolve(l.__await).then(function(t){n("next",t,c,u)},function(t){n("throw",t,c,u)}):e.resolve(l).then(function(t){f.value=t,c(f)},function(t){return n("throw",t,c,u)})}u(s.arg)}var o;a(this,"_invoke",{value:function(t,r){function i(){return new e(function(e,o){n(t,r,e,o)})}return o=o?o.then(i,i):i()}})}function P(e,r,n){var o=y;return function(i,a){if(o===d)throw Error("Generator is already running");if(o===g){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var u=M(c,n);if(u){if(u===b)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===y)throw o=g,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=d;var s=p(e,r,n);if("normal"===s.type){if(o=n.done?g:v,s.arg===b)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o=g,n.method="throw",n.arg=s.arg)}}}function M(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,M(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),b;var i=p(o,e.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,b;var a=i.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,b):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,b)}function T(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function S(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function C(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(T,this),this.reset(!0)}function N(e){if(e||""===e){var n=e[u];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,a=function r(){for(;++o<e.length;)if(i.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return a.next=a}}throw new TypeError(r(e)+" is not iterable")}return w.prototype=_,a(O,"constructor",{value:_,configurable:!0}),a(_,"constructor",{value:w,configurable:!0}),w.displayName=l(_,f,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===w||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,_):(t.__proto__=_,l(t,f,"GeneratorFunction")),t.prototype=Object.create(O),t},e.awrap=function(t){return{__await:t}},j(E.prototype),l(E.prototype,s,function(){return this}),e.AsyncIterator=E,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new E(h(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then(function(t){return t.done?t.value:a.next()})},j(O),l(O,f,"Generator"),l(O,u,function(){return this}),l(O,"toString",function(){return"[object Generator]"}),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=N,C.prototype={constructor:C,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(S),!e)for(var r in this)"t"===r.charAt(0)&&i.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function n(n,o){return c.type="throw",c.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],c=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var u=i.call(a,"catchLoc"),s=i.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!s)throw Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&i.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,b):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),b},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),S(r),b}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;S(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:N(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),b}},e}function o(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}function i(t){return function(){var e=this,r=arguments;return new Promise(function(n,i){var a=t.apply(e,r);function c(t){o(a,n,i,c,u,"next",t)}function u(t){o(a,n,i,c,u,"throw",t)}c(void 0)})}}function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function c(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,g(n.key),n)}}function u(t,e,r){return e&&c(t.prototype,e),r&&c(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}function s(t,e,r){return e=p(e),f(t,h()?Reflect.construct(e,r||[],p(t).constructor):e.apply(t,r))}function f(t,e){if(e&&("object"==r(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return l(t)}function l(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function h(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch(t){}return(h=function(){return!!t})()}function p(t){return(p=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function y(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&v(t,e)}function v(t,e){return(v=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t})(t,e)}function d(t,e,r){return(e=g(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function g(t){var e=b(t,"string");return"symbol"==r(e)?e:e+""}function b(t,e){if("object"!=r(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,e||"default");if("object"!=r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}var m=function(e){function r(){var t;a(this,r);for(var e=arguments.length,n=new Array(e),o=0;o<e;o++)n[o]=arguments[o];return d(t=s(this,r,[].concat(n)),"_cookies",[]),d(t,"_cakes",[]),t}return y(r,t.default),u(r,[{key:"loadResponses",value:function(){var t=i(n().mark(function t(e){var r,o;return n().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(e);case 2:if((r=t.sent).ok){t.next=5;break}throw new Error("Failed to fetch products");case 5:return t.next=7,r.json();case 7:o=t.sent,this.sortData(o.data.products),this.clearRows(),this.generateMarkup(this._cookies,"Cookies"),this.generateMarkup(this._cakes,"Cakes");case 12:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},{key:"sortData",value:function(t){var e=this;t.filter(function(t){return"active"===t.status}).forEach(function(t){var r=[t.image,t.name,t.price,t.priceAfterDiscount,t.validEndDate,t.slug];"Cookies"===t.type?e._cookies.push(r):e._cakes.push(r)})}},{key:"clearRows",value:function(){this.rowCookies.innerHTML="",this.rowCakes.innerHTML=""}},{key:"generateDiscountedMarkup",value:function(t,e,r){return t===e?'<h4 class="product__container--box--price">RM'.concat(t,"</h4>"):'<h4\n              class="product__container--box--price product__container--box--price--old"\n            >\n              RM'.concat(t,'\n            </h4>\n            <h4\n              class="product__container--box--price product__container--box--price--promo"\n            >\n              RM').concat(e,'\n            </h4>\n            <h4 class="product__container--box--validity">\n              PROMO UNTIL ').concat(r,"\n            </h4>")}},{key:"generateIndMarkup",value:function(t){var e=t[0],r=t[1],n=t[2],o=t[3],i=t[4],a=t[5];i&&(i=this.formatDate(i));var c=this.generateDiscountedMarkup(n,o,i);return'<div class="product__container--box">\n            <img\n              src="products/'.concat(e,'"\n              alt="').concat(a,'"\n              class="product__container--box--img"\n              data-name="').concat(a,'"\n            />\n            <h3 class="product__container--box--name">').concat(r,"</h3>\n            ").concat(c,"\n          </div>")}},{key:"generateMarkup",value:function(t,e){var r=this,n=t.map(function(t){return r.generateIndMarkup(t)}).join("");"Cookies"===e?this.rowCookies.insertAdjacentHTML("beforeend",n):"Cakes"===e&&this.rowCakes.insertAdjacentHTML("beforeend",n)}},{key:"eventHandler",value:function(t){document.addEventListener("DOMContentLoaded",function(){t()})}}])}(),w=exports.default=new m;
},{"../master.js":"VAV0"}],"niua":[function(require,module,exports) {
"use strict";var t=n(require("./views/featureView.js")),r=n(require("./views/productView.js")),e=require("./helper.js");function n(t){return t&&t.__esModule?t:{default:t}}function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(){i=function(){return r};var t,r={},e=Object.prototype,n=e.hasOwnProperty,a=Object.defineProperty||function(t,r,e){t[r]=e.value},c="function"==typeof Symbol?Symbol:{},u=c.iterator||"@@iterator",f=c.asyncIterator||"@@asyncIterator",l=c.toStringTag||"@@toStringTag";function s(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{s({},"")}catch(t){s=function(t,r,e){return t[r]=e}}function h(t,r,e,n){var o=r&&r.prototype instanceof w?r:w,i=Object.create(o.prototype),c=new I(n||[]);return a(i,"_invoke",{value:P(t,e,c)}),i}function p(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(t){return{type:"throw",arg:t}}}r.wrap=h;var y="suspendedStart",v="suspendedYield",d="executing",g="completed",m={};function w(){}function b(){}function L(){}var x={};s(x,u,function(){return this});var E=Object.getPrototypeOf,_=E&&E(E(T([])));_&&_!==e&&n.call(_,u)&&(x=_);var j=L.prototype=w.prototype=Object.create(x);function O(t){["next","throw","return"].forEach(function(r){s(t,r,function(t){return this._invoke(r,t)})})}function S(t,r){function e(i,a,c,u){var f=p(t[i],t,a);if("throw"!==f.type){var l=f.arg,s=l.value;return s&&"object"==o(s)&&n.call(s,"__await")?r.resolve(s.__await).then(function(t){e("next",t,c,u)},function(t){e("throw",t,c,u)}):r.resolve(s).then(function(t){l.value=t,c(l)},function(t){return e("throw",t,c,u)})}u(f.arg)}var i;a(this,"_invoke",{value:function(t,n){function o(){return new r(function(r,o){e(t,n,r,o)})}return i=i?i.then(o,o):o()}})}function P(r,e,n){var o=y;return function(i,a){if(o===d)throw Error("Generator is already running");if(o===g){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var u=k(c,n);if(u){if(u===m)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===y)throw o=g,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=d;var f=p(r,e,n);if("normal"===f.type){if(o=n.done?g:v,f.arg===m)continue;return{value:f.arg,done:n.done}}"throw"===f.type&&(o=g,n.method="throw",n.arg=f.arg)}}}function k(r,e){var n=e.method,o=r.iterator[n];if(o===t)return e.delegate=null,"throw"===n&&r.iterator.return&&(e.method="return",e.arg=t,k(r,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),m;var i=p(o,r.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,m;var a=i.arg;return a?a.done?(e[r.resultName]=a.value,e.next=r.nextLoc,"return"!==e.method&&(e.method="next",e.arg=t),e.delegate=null,m):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,m)}function G(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function N(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function I(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(G,this),this.reset(!0)}function T(r){if(r||""===r){var e=r[u];if(e)return e.call(r);if("function"==typeof r.next)return r;if(!isNaN(r.length)){var i=-1,a=function e(){for(;++i<r.length;)if(n.call(r,i))return e.value=r[i],e.done=!1,e;return e.value=t,e.done=!0,e};return a.next=a}}throw new TypeError(o(r)+" is not iterable")}return b.prototype=L,a(j,"constructor",{value:L,configurable:!0}),a(L,"constructor",{value:b,configurable:!0}),b.displayName=s(L,l,"GeneratorFunction"),r.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===b||"GeneratorFunction"===(r.displayName||r.name))},r.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,L):(t.__proto__=L,s(t,l,"GeneratorFunction")),t.prototype=Object.create(j),t},r.awrap=function(t){return{__await:t}},O(S.prototype),s(S.prototype,f,function(){return this}),r.AsyncIterator=S,r.async=function(t,e,n,o,i){void 0===i&&(i=Promise);var a=new S(h(t,e,n,o),i);return r.isGeneratorFunction(e)?a:a.next().then(function(t){return t.done?t.value:a.next()})},O(j),s(j,l,"Generator"),s(j,u,function(){return this}),s(j,"toString",function(){return"[object Generator]"}),r.keys=function(t){var r=Object(t),e=[];for(var n in r)e.push(n);return e.reverse(),function t(){for(;e.length;){var n=e.pop();if(n in r)return t.value=n,t.done=!1,t}return t.done=!0,t}},r.values=T,I.prototype={constructor:I,reset:function(r){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(N),!r)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(r){if(this.done)throw r;var e=this;function o(n,o){return c.type="throw",c.arg=r,e.next=n,o&&(e.method="next",e.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),f=n.call(a,"finallyLoc");if(u&&f){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!f)throw Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,m):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),m},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),N(e),m}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;N(e)}return o}}throw Error("illegal catch attempt")},delegateYield:function(r,e,n){return this.delegate={iterator:T(r),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=t),m}},r}function a(t,r,e,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void e(t)}c.done?r(u):Promise.resolve(u).then(n,o)}function c(t){return function(){var r=this,e=arguments;return new Promise(function(n,o){var i=t.apply(r,e);function c(t){a(i,n,o,c,u,"next",t)}function u(t){a(i,n,o,c,u,"throw",t)}c(void 0)})}}var u=function(r){t.default.switchImgs(r)},f=function(){var t=c(i().mark(function t(){return i().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:r.default.loadResponses(e.APIUrl);case 1:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}(),l=function(){t.default.handlerSelectImg(function(t){u(t)}),r.default.eventHandler(function(){f()})};l();
},{"./views/featureView.js":"he3g","./views/productView.js":"ZFq6","./helper.js":"YaYI"}]},{},["niua"], null)
//# sourceMappingURL=/bundle.js.map