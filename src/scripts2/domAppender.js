import domStructure from "./domStructure";
import fetch from "./APIcaller";
import apiStructure from "./APIstructure";

const domAppender = {
  appendForm(page) {
    let formSection = document.createElement("section");
    formSection.id = `${page}-section`
    formSection.appendChild(domStructure[page].buildForm());
    return formSection
},
  listCards(page) {
  const formArticle = document.createElement("article");
  formArticle.classList.add("card-deck")
  formArticle.id = `${page}-article`;
  fetch.getAll(page).then(events => {
    let docFrag = document.createDocumentFragment();
    events.forEach(eventObject => {
      docFrag.appendChild(domStructure.event.postToDOM(eventObject));

    }); formArticle.appendChild(docFrag)
  })
  return formArticle
},
  createDOM (page) {
    const mainContainer = document.querySelector("#main-section");
    while (mainContainer.firstChild) {
      mainContainer.removeChild(mainContainer.firstChild);
    };
    mainContainer.appendChild(this.listCards(page));
  },
  createFormDOM (page) {
    const mainContainer = document.querySelector("#main-section");
    while (mainContainer.firstChild) {
      mainContainer.removeChild(mainContainer.firstChild);
    };
    mainContainer.appendChild(this.appendForm(page));
  }



};

export default domAppender;
