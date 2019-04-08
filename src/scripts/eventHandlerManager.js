import fetch from "./APIcaller"
import apiStructure from "./apiStructure"
import DOM from "./domAppender"
import struct from "./domStructure";
import welcome from "./welcome";
import build from "./constructors"

const eventHandler = {

  //Function to capture the values of data entered into the forms when the submit button is pressed.
  handleArticleSubmit() {
    let articlesTitle = document.querySelector("#titleInputArticles")
    let articlesSynopsis = document.querySelector("#synopsisInputArticles")
    let articlesTimeStamp = "test"
    let articlesUrl = document.querySelector("#urlInputArticles")

    let entryToPost = apiStructure.postArticle(articlesTitle.value, articlesSynopsis.value, "", articlesUrl.value)
    console.log(entryToPost)

    fetch.postOne("articles", entryToPost).then(data => {
      DOM.articles.reloadDOM()
    })
  },

  handleTaskSubmit() {
    //Scrapes values of name/date inputs
    //Converts to object using postTask in apiStructure
    //Performs a POST request using that object.
    //Retrieves updated list, then appends to DOM
    let taskName = document.querySelector("#nameInputTask");
    let taskDate = document.querySelector("#dateInputTask");

    let entryToPost = apiStructure.postTask(taskName.value, taskDate.value, false);
    fetch.postOne("tasks", entryToPost).then(() => fetch.getAll("tasks")).then(response => DOM.tasks.appendTasks(response))
  },
  handleTaskCheckbox() {
    let checkBoxId = event.target.id.split("--")[1];

    let patchedTask = {
      "complete": true
    }
    fetch.patchEntry("tasks", checkBoxId, patchedTask).then(() => fetch.getAll("tasks")).then(response => DOM.tasks.appendTasks(response));
    console.log("Clicked")
  },
  handleTaskEdit() {
    let taskTargetId = event.target.parentNode.id.split("--")[1];
    console.log(taskTargetId);

    let taskSection = document.querySelector(`#taskSection--${taskTargetId}`);
    DOM.clearElement(taskSection);
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
    let target = event.target;
    let activeNav = document.querySelector(".active");
    activeNav.classList.remove("active");
    target.classList.add("active")
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
    let page = event.target.parentNode.parentNode.id.split("-")[0];
    let pageID = event.target.id.split("--")[2];
    let pageDivID = event.target.parentNode.id
    fetch.getOneEntry(page, pageID)
      .then(data => {
        let pageDiv = document.querySelector(`#${pageDivID}`)
        
        console.log(pageDiv)
        build.clearElement(pageDiv)
      });
  },
  // handleArticlesEditSubmitButton = () => {
  //   const journalDivID = event.target.parentNode.id;

  //   const entryDate = document.querySelector("#Date");
  //   const entryConcept = document.querySelector("#text");
  //   const entryJournal = document.querySelector("#editJournalInput");
  //   const entryMood = document.querySelector("#editMoodInput");
  //   const journalEntry = {
  //     date: entryDate.value,
  //     concept: entryConcept.value,
  //     entry: entryJournal.value,
  //     mood: entryMood.value
  //   };

  //   API.editJournalEntry(journalDivID, journalEntry)
  //     .then(API.fetchJournalEntries)
  //     .then(insertDOM.renderJournalEntries);
  // };
  handleMessageSubmit() {

    let messageName = document.querySelector("#messageInputForm");

    let entryToPost = apiStructure.postMessage(messageName.value);
    fetch.postOne("messages", entryToPost).then(data => {
      DOM.messages.reloadDOM()
    })
  },
  handleLogin() {
    welcome.getUserList();
  },
  handleNewUser() {
    DOM.welcome.createRegistration();
  },
  handleRegister() {
    welcome.createNewUser();
  }
}

export default eventHandler