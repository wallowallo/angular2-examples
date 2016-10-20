// - without brackets is good for one-liners.
var add10 = function (y) { return y + 10; };
console.log(add10(2));
// - with brackets is good for extensive code and multiple lines for a cleaner look.
var add13 = function (y) {
    y += 13;
    console.log(y);
};
add13(3);
