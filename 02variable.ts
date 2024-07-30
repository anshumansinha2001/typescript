let greetings: string = "Anshuman Sinha";

greetings.toLowerCase();
console.log(greetings);

// number
let userId: number = 546666.3;

// boolean
let isLogedIn: boolean = false;

// Better way to do that above things (type inference)
let userId_ = 546666.3;
let isLogedIn_ = false;

// any(keyword)
let hero;
function getHero() {
  return "thor";
}
hero = getHero();

export {};
