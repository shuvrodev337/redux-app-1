//currying
const add = (a) => {
  return (b) => {
    return (c) => {
      return a + b + c;
    };
  };
};
// console.log(add(2)(2)(2)); // 6
const level = add(2);
console.log(level(4)(4)); // 10
