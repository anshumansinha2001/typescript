interface User {
  readonly uniqueId: number;
  email: string;
  name: string;
  age?: number;
  //   checkAdmin: () => boolean;
  checkAdmin(): boolean; //alternative
  getCoupon(code: string): number;
}

const user1: User = {
  uniqueId: 14,
  email: "one@mail.com",
  name: "As",
  checkAdmin: () => {
    return true;
  },
  getCoupon: (str) => 123,
};
