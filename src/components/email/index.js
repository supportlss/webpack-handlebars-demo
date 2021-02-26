import data from "./mock/index.js";
const emailTemplate = require("./template/email");

export default class Book {
  static render(rootClassName) {
    const rootElement = document.getElementsByClassName(rootClassName)[0];
    rootElement.innerHTML = emailTemplate(data);
  }
}
