//---- Here is What Interface can Do --->

interface Animal {
  color: string;
  iq: number;
}

// re-opening Interface
interface Animal {
  gender: string;
}

const Lion: Animal = {
  color: "yellow",
  gender: "",
  iq: 3,
};

// inhertitance proprtiy
interface Human extends Animal {
  role: "student" | "Job" | "retired";
}

const anshuman: Human = {
  role: "student",
  color: "brown",
  iq: 80,
  gender: "male",
};

// ----- What limitation Type has --->
type Animal_ = {
  name: string;
};

// it inherit the property
type Bear = Animal_ & {
  honey: boolean;
};

//  We CAN NOT change afetr being created unlike Interface
