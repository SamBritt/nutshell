import fetch from "./APIcaller"
import build from "./APIstructure"
import DOM from "./domAppender"

const eventHandler = {
    handleTaskSubmit(){
        //Scrapes values of name/date inputs
        //Converts to object using postTask in APIStructure
        //Performs a POST request using that object.
        //Retrieves updated list, then appends to DOM
        let taskName = document.querySelector("#nameInputTask");
        let taskDate = document.querySelector("#dateInputTask");

        let entryToPost = build.postTask(taskName.value, taskDate.value, false);
        fetch.postOne("tasks", entryToPost).then(() => fetch.getAll("tasks")).then(response => DOM.appendTasks(response))
    },
  //this uses event delegation to check for the navigation links, and if the click lands on a navlink, it uses the ID of the element to run the DOM Appender function for the specified page.
  handleNavigation() {
    if(!event.target.matches("a")) {
      return
    }

    let page = event.target.id.split("--")[1];

    DOM[page].createDOM()
  },
//this uses dynamic targeting to reference the ID and page of the card to be deleted. It then reloads the DOM with an updated version of the page.
  handleDeleteButton () {
    let page = event.target.parentNode.parentNode.id.split("-")[0];
    let pageID = event.target.id.split("--")[2];
    fetch.deleteEntry(page, pageID)
    .then(data => {
      let page = document.querySelector("article").id.split("-")[0];
      DOM[page].createDOM()});
  },
  //not used yet
  handleEditButton() {
    console.log(event.target.id)
  }
}

export default eventHandler