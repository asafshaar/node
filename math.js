const add = function(a,b) {
    return a+b;
}

const sub = function(a, b) {
    return add(a, -b);
}

const fix = 3.141;

module.exports = {fix, add, sub};