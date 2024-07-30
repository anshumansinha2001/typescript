class User {
  private _courceCount = 1;

  constructor(public email: string, public name: string) {}

  get getAppleMail(): string {
    return `apple ${this.email}`;
  }

  get courceCount(): number {
    return this._courceCount;
  }

  set courceCount(courseNum) {
    if (courseNum <= 1) {
      throw new Error("Course count should be more than 1");
    }
    this._courceCount = courseNum;
  }
}

const anshu = new User("ansh@gmail.com", "AS");
