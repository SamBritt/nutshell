import fetch from "./APIcaller"
import build from "./APIstructure"
import DOM from "./domAppender"
import domAppender from "./domAppender";
import struct from "./domStructure";

const eventHandler = {

  //Function to capture the values of data entered into the forms when the submit button is pressed.
  handleArticlesSubmit() {
    let articlesTitle = document.querySelector("#titleInputArticles")
    let articlesSynopsis = document.querySelector("#synopsisInputArticles")
    let articlesTimeStamp = "test"
    let articlesUrl = document.querySelector("#urlInputArticles")

    let entryToPost = build.postArticles(articlesTitle.value, articlesSynopsis.value, "", articlesUrl.value)
    console.log(entryToPost)
    fetch.postOne("articles", entryToPost)
  },

  handleTaskSubmit() {
    //Scrapes values of name/date inputs
    //Converts to object using postTask in APIStructure
    //Performs a POST request using that object.
    //Retrieves updated list, then appends to DOM
    let taskName = document.querySelector("#nameInputTask");
    let taskDate = document.querySelector("#dateInputTask");


    let entryToPost = build.postTask(taskName.value, taskDate.value, false);
    fetch.postOne("tasks", entryToPost).then(() => fetch.getAll("tasks")).then(response => DOM.appendTasks(response))
  },
  handleTaskCheckbox() {
    let checkBoxId = event.target.id.split("--")[1];

    let patchedTask = {
      "complete": true
    }
    fetch.patchEntry("tasks", checkBoxId, patchedTask).then(() => fetch.getAll("tasks")).then(response => DOM.appendTasks(response));
    console.log("Clicked")
  },
  handleTaskEdit() {
    let taskTargetId = event.target.parentNode.id.split("--")[1];
    console.log(taskTargetId);

    let taskSection = document.querySelector(`#taskSection--${taskTargetId}`);
    domAppender.clearElement(taskSection);
    fetch.getOneEntry("tasks", taskTargetId).then(taskToEdit => {
      const editForm = struct.buildTaskEditForm(taskToEdit);
      taskSection.appendChild(editForm)
    })
  },
  handleTaskUpdate() {
    console.log("update clicked");
  },
  //this uses event delegation to check for the navigation links, and if the click lands on a navlink, it uses the ID of the element to run the DOM Appender function for the specified page.
  handleNavigation() {
    if (!event.target.matches("a")) {
      return
    }

    let page = event.target.id.split("--")[1];

    DOM[page].createDOM()
  },
  //this uses dynamic targeting to reference the ID and page of the card to be deleted. It then reloads the DOM with an updated version of the page.
  handleDeleteButton() {
    let page = event.target.parentNode.parentNode.id.split("-")[0];
    let pageID = event.target.id.split("--")[2];
    fetch.deleteEntry(page, pageID)
      .then(data => {
        let page = document.querySelector("article").id.split("-")[0];
        DOM[page].createDOM()
      });
  },
  //not used yet
  handleEditButton() {
    console.log("clicked");
  },
  handleMessageSubmit() {
    //Scrapes values of name/date inputs
    //Converts to object using postTask in APIStructure
    //Performs a POST request using that object.
    //Retrieves updated list, then appends to DOM
    let messageName = document.querySelector("#messageInputForm");

    let entryToPost = build.postMessage(messageName.value);
    fetch.postOne("messages", entryToPost).then(data => {
      DOM.messages.reloadDOM()
    })
  }
}

export default eventHandler