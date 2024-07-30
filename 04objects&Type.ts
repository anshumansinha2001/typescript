function createUser_({ name: string, isPaid: bolloeam }) {
  return;
}
createUser_({ name: "anshu", isPaid: true });

function createCourse(): { name: string; price: number } {
  return { name: "web", price: 200 };
}

// Type Aliases
type User_ = {
  name: string;
  email: string;
  isActive: boolean;
};

function createUser(user: User_) {
  return;
}
createUser({ name: "anshu", email: "", isActive: true });

// READONLY and OPTIONAL
type User = {
  readonly _id: string;
  name: string;
  email: string;
  isActive: boolean;
  gender?: string;
};

let myUser: User = {
  _id: "",
  name: "",
  email: "",
  isActive: false,
};

myUser.name = "anshuman";
// myUser._id = "26262"

//--- Combine (not recommeded)----
type cardNumber = {
  cardnumber: number;
};
type cardDate = {
  cardDate: number;
};

type cardDetails = cardNumber &
  cardDate & {
    cvv: number;
  };

export {};
