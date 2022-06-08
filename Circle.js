"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Circle = void 0;
class Circle {
    constructor(radius) {
        this._radius = radius;
    }
    getRadius() {
        return this._radius;
    }
    setRadius(radius) {
        this._radius = radius;
    }
    toString() {
        return ` A Circle with radius = ${this.getRadius()} `;
    }
}
exports.Circle = Circle;
