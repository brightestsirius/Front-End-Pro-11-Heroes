"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.wolverineHero = void 0;

var _hero = require("./hero.js");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var wolverineData = {
  name: "Wolverine",
  info: "Wolverine is a 2015 American superhero film based on the Marvel Comics characters of the same name: Scott Lang and Hank Pym.",
  img: "wolverine"
};

var Wolverine =
/*#__PURE__*/
function (_Hero) {
  _inherits(Wolverine, _Hero);

  function Wolverine(data) {
    _classCallCheck(this, Wolverine);

    return _possibleConstructorReturn(this, _getPrototypeOf(Wolverine).call(this, data));
  }

  _createClass(Wolverine, [{
    key: "btnFunc",
    value: function btnFunc() {
      var popup = document.querySelector("#".concat(this.name, "Popup"));
      popup.addEventListener('click', this.btnFunc.bind(this));

      if (popup.classList.length <= 1) {
        popup.classList.add("showPopup");
      } else if (popup.classList.contains("showPopup")) {
        popup.classList.replace("showPopup", "hidePopup");
      } else if (popup.classList.contains("hidePopup")) {
        popup.classList.replace("hidePopup", "showPopup");
      }
    }
  }, {
    key: "addElement",
    value: function addElement() {
      var popup = document.createElement("div");
      popup.id = "".concat(this.name, "Popup");
      popup.classList.add("".concat(this.name, "WP"));
      return popup;
    }
  }]);

  return Wolverine;
}(_hero.Hero);

var wolverineHero = new Wolverine(wolverineData);
exports.wolverineHero = wolverineHero;
console.log(wolverineHero);