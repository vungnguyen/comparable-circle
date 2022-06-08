"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ComparableCircle_1 = require("./ComparableCircle");
let circle = [];
circle[0] = new ComparableCircle_1.ComparableCircle(10);
circle[1] = new ComparableCircle_1.ComparableCircle(15);
circle[2] = new ComparableCircle_1.ComparableCircle(20);
let result = circle[1].compareTo(circle[2]);
if (result == 1) {
    console.log('the current circle is larger');
}
if (result == -1) {
    console.log('the current circle is smaller');
}
