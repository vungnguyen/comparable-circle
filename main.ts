import {ComparableCircle} from "./ComparableCircle";

let circle = [];
circle[0] = new ComparableCircle(10);
circle[1] = new ComparableCircle(15);
circle[2] = new ComparableCircle(20);
let result = circle[1].compareTo(circle[2])
if (result ==1 ) {
    console.log('the current circle is larger')
}if (result == -1) {
    console.log('the current circle is smaller')
}