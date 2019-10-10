import CatService from "../services/CatService.js";

//PRIVATE
let _catService = new CatService();

//access parent element
//create template element
//fill template with data from service
//add template to the parent
function _drawCats() {
  let catElem = document.querySelector("#cat");
  let cats = _catService.Cats;
  let template = "";
  cats.forEach((cat, i) => {
    template += `
        <h1>${cat.name}</h1>
        <h3>${cat.petCount}</h3>
    <button onclick="app.controllers.catController.pet(${i})">Pet</button>
        `;
  });
  catElem.innerHTML = template;
}

//PUBLIC
export default class CatController {
  constructor() {
    console.log("Hello from cat controller");
    _drawCats();
  }

  pet(index) {
    _catService.pet(index);
    _drawCats();
  }
}
