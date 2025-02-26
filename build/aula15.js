"use strict";
function fsoma(...n) {
    let s = 0;
    for (let en of n) {
        s += en;
    }
    return s;
}
console.log(fsoma(10, 20, 30, 14, 52, 9, 5, 9, 29));
