import CatController from "./controllers/CatController.js";

class App {
  constructor() {
    this.controllers = {
      catController: new CatController()
    };
  }
}

window["app"] = new App();
