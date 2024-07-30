// Union operatoin
let score: string | number;

score = 500;
score = "500";

type User = {
  name: string;
  id: number;
};

type Admin = {
  username: string;
  id: number;
};

let anshuman: User | Admin = {
  name: "Anshuman Sinha",
  id: 2,
};

anshuman = {
  username: "ANhsu",
  id: 2,
};

function getDBId(id: number | string) {
  console.log(`DB id is: ${id}`);
}
getDBId("2");
getDBId(2);

// One objection here
function getDBId_(id: number | string) {
  if (typeof id === "string") {
    id.toLowerCase();
  } else {
    id = id + 3;
  }
}

// Array
const data: number[] = [1, 2, 3];
const data2: string[] = ["1", "2", "3"];
// here down we can have either number or string in the array
const data3: string[] | number[] = ["1", "2", "3"];
// But here down we can have both number or string in the array
const data4: (string | number | boolean)[] = ["1", 2, "3", false];

// Strict the assignment value
let pi: 3.14 = 3.14;
// pi = 3.144

let seatAllotment: "aisle" | "middle" | "window";

seatAllotment = "window";
// seatAllotment = "crew";
