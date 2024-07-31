const score: Array<number> = [];
const names: Array<string> = [];

function identityOne(val: boolean | number) {
  return val;
}

function identityTwo(val: any): any {
  return val;
}

// It will same as 'any' but in a generic way
function identityThree<Type>(val: Type): Type {
  return val;
}

// identityThree("5");

// It works exactly same as Three
function identityFour<T>(val: T): T {
  return val;
}

interface Car {
  brand: string;
  quantity: number;
}

identityFour<Car>({ brand: "BMW", quantity: 2 });

function getSearchProducts<T>(products: T[]): T {
  // dp some database operations
  const myIndex = 3;
  return products[myIndex];
}

// arrow func of above func:-
const getMoreSearchProducts = <T>(products: T[]): T => {
  // do some database operations
  const myIndex = 4;
  return products[myIndex];
};

// NOTE:- Somewhere <T,> there would be a comma in generic tag, which represent that it is generic tag not html or anything.

// MORAL : This genric is quite useful and we can reuse it as many times we want with different values
