function addTwo(num: number): number {
  return num + 2;
}
addTwo(5);

function getUpper(val: string) {
  return val.toUpperCase();
}
getUpper("5");

function signUpUser(name: string, email: string, password: string) {
  return;
}
signUpUser("anshu", "2", "3");

var loginUser = (name: string, password: string, isAdmin: boolean) => {
  return;
};
loginUser("ansh", "ansh202", true);

// function getMyValue(myVal: number): boolean {
//   if (myVal > 5) {
//     return true;
//   }
//   return "200 OK";
// }

const sayHello = (s: string): string => {
  return "Hello";
};

const heros = ["ironman", "spiderman", "thor", "batman"];
heros.map((hero): string => {
  return `hero is ${hero}`;
});

// Use of void
function consoleError(errMsg: string): void {
  console.log(errMsg);
}

// Use of never(keyword)
function handleError(errMsg: string): never {
  throw new Error(errMsg);
}

export {};
