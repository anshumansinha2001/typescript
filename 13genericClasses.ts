function genericFunc<T, U extends number>(valOne: T, valTwo: U): object {
  return {
    valOne,
    valTwo,
  };
}

// genericFunc(3, "2");
genericFunc(3, 2.36);

interface Database {
  connection: string;
  username: string;
  password: string;
}

function genericFunc2<T, U extends Database>(valOne: T, valTwo: U): object {
  return {
    valOne,
    valTwo,
  };
}

//   genericFunc2(3, {});
