"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.ProductInCart = exports.Product = void 0;
var Product = /** @class */ (function () {
    function Product(value) {
        this.id = value.id;
        this.name = value.name;
        this.price = value.price;
        this.discount = value.discount;
        this.avatar = value.avatar;
    }
    ;
    return Product;
}());
exports.Product = Product;
var ProductInCart = /** @class */ (function (_super) {
    __extends(ProductInCart, _super);
    function ProductInCart(value) {
        var _this = _super.call(this, value) || this;
        _this.number = value.number;
        return _this;
    }
    ;
    return ProductInCart;
}(Product));
exports.ProductInCart = ProductInCart;
