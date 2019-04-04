import fetch from "./APIcaller"
import build from "./APIstructure"
import DOM from "./domAppender"

const eventHandler = {
  handleNavigation() {
    if(!event.target.matches("a")) {
      return
    }

    let page = event.target.id.split("--")[1];
    DOM.createDOM(page);
  },
  handleDeleteButton () {
    let page = event.target.parentNode.parentNode.id.split("-")[0];
    let pageID = event.target.id.split("--")[2];
    fetch.deleteEntry(page, pageID).then(data => {
      let page = document.querySelector("article").id.split("-")[0];
      DOM.createDOM(page)});
  },
  handleEditButton() {
    console.log(event.target.id)
  }
}

export default eventHandler