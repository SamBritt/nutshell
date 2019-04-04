import domStructure from "./domStructure";
import fetch from "./APIcaller";
import apiStructure from "./APIstructure";
import build from "./constructors";
import messages from "./messages";

// organizes the DOM appender so that navigation can dynamically target specific pages and create them.

const domAppender = {
    clearElement(domElement) {
        while (domElement.firstChild) {
            domElement.removeChild(domElement.firstChild);
        }
    },
  nav: {
    appendNav () {
    const navBar = document.querySelector("#output");
    navBar.appendChild(domStructure.nav.createNavBar());
    }
  },
  home: {
    createDOM() {
      console.log("home")
    }
  },
  articles: {
    createDOM() {
      console.log("articles")
    }
  },
  events: {
    createDOM() {
      console.log("events")
    }
  },
  messages: {
    createDOM() {
      console.log("messages")
      const mainContainer = document.querySelector("#main-container");
      while (mainContainer.firstChild) {
        mainContainer.removeChild(mainContainer.firstChild);
      };
      mainContainer.appendChild(messages.buildForm());
      mainContainer.appendChild(messages.listCards());
    }
  },
  friends: {
    createDOM() {
      console.log("friends")
    }
  },
    appendTaskForm() {
        let taskSection = document.querySelector("#tasks-section");
        taskSection.appendChild(domStructure.buildTaskForm());
    },
    //Creates a container for DOM elements to be displayed
    createTaskContainer(){
        const taskSection = document.getElementById("tasks-section");
        const article = build.elementWithTextCreator("article", undefined, "taskArticle")
        taskSection.appendChild(article);

    },
    //Loops through task objects, creates HTML structure for each, then appends
    //to DOM
    appendTasks(tasks) {
        let taskArticle = document.getElementById("taskArticle");

        let docFrag = document.createDocumentFragment();
        tasks.forEach(element => {
            docFrag.appendChild(domStructure.buildTaskComponent(element))
        });
        this.clearElement(taskArticle);

        taskArticle.appendChild(docFrag);
    }

};

export default domAppender;
