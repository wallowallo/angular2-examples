// - without brackets is good for one-liners.
const add10 = (y) => y + 10;
console.log(add10(2));

// - with brackets is good for extensive code and multiple lines for a cleaner look.
const add13 = (y) => {
  y += 13;
  console.log(y);
}
add13(3);
