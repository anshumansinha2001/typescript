// class User {
//   public email: string;
//   name: string;
//   readonly city: string = "patna";
//   constructor(private _id: number, email: string, name: string) {
//     this.email = email;
//     this.name = name;
//     this._id = _id;
//   }
// }

// ******** ALTERNATIVE ********

class User {
  protected token = 1;

  readonly city: string = "patna";
  constructor(private _id: number, public email: string, public name: string) {}

  private deleteToken() {
    console.log("Token Deleted!");
  }
}

// Access Modifier
class SubUser extends User {
  isFamily: boolean = true;
  changeCourseCount() {
    this.token = 4; //here
  }
}

const anshu = new User(24, "ansh@gmail.com", "AS");
// anshu.city  --> can't access since it is private
// anshu.deleteToken()
