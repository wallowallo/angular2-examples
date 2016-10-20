// - the blocked scope makes it so that variables cant be accessed outside
//   the functions scope.
var add3 = function (y) {
    var x = 3;
    y += x;
    console.log(y); // - this is valid
};
add3(4);
//console.log(y);  - this is not valid
