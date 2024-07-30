// const user: (string | number)[] = ["as", 3];

// BY USing Tuples
let user: [string, number, boolean];

user: ["as", 2, true];

const rgb: [number, number, number] = [255, 255, 255];

// Also we can Implement Tuples by Type
type User = [number, string];

const newUser: User = [123, "As"];
newUser[1] = "";
// newUser.push(true);
