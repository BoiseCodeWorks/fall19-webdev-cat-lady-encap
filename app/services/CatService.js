import Cat from "../models/Cat.js";
//PRIVATE
let _cat1 = new Cat();
let _cat2 = new Cat("Not Mr. Snibbley");
let _cats = [_cat1, _cat2];

//PUBLIC
export default class CatService {
  pet(index) {
    _cats[index].petCount++;
  }

  //FIXME make a copy of the cat object
  get Cats() {
    return _cats;
  }

  constructor() {
    console.log("hello from cat service");
  }
}

let users = [{ id: 123, name: "Bob" }, { id: 456, name: "Bill" }];
let idToFindBy = 456;
let nameToFindBy = "Bob";

let foundUser = users.find(user => user.id == idToFindBy);
let namedFoundUser = users.find(user => user.name == nameToFindBy);

function findUser(name) {
  for (let i = 0; i < users.length; i++) {
    const user = users[i];
    if (user.name == name) {
      return user;
    }
  }
}

console.log(foundUser.name);
console.log(findUser("Bob").name);
