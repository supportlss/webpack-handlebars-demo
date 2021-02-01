import data from "./mock/index.js";
const bookListingTemplate = require("./template/book-listing.handlebars");

export default class Book {
  static render(rootClassName) {
    const rootElement = document.getElementsByClassName(rootClassName)[0];
    rootElement.innerHTML = bookListingTemplate(data);
  }
}
