import domStructure from "./domStructure";
import fetch from "./APIcaller";
import apiStructure from "./APIstructure";
import build from "./constructors";
import messages from "./messages";
import event from "./eventsAppender"
import welcome from "./welcome"

// organizes the DOM appender so that navigation can dynamically target specific pages and create them.

const mainContainer = document.querySelector("#main-container");

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
      while (mainContainer.firstChild) {
        mainContainer.removeChild(mainContainer.firstChild);
      };
      mainContainer.appendChild(build.elementWithText("div", "welcome"))
    }


  },
  welcome: {
    // this is the initial function to load the DOM. it checks the session storage to see if a user is currently logged in, and if so, loads the home page, otherwise, it directs to the login page. 
    createDOM() {
      if (window.sessionStorage.getItem("userName")) {
        domAppender.nav.appendNav();
        domAppender.home.createDOM();
      } else {
      mainContainer.appendChild(welcome.loginPage());
    }
  }
},
  tasks: {
    createDOM() {
      console.log("home")
    }
  },
  articles: {
    createDOM() {
      while (mainContainer.firstChild) {
        mainContainer.removeChild(mainContainer.firstChild);
      };
      mainContainer.appendChild(this.appendArticlesForm());
    },
    //Writes the form functions for the articles component to the DOM.
    appendArticlesForm() {
      let articlesSection = document.createElement("section");
      articlesSection.id = "articles-section"
      articlesSection.appendChild(domStructure.buildArticlesForm());
      return articlesSection
},
  },
  events: {
    createDOM() {
      
      while (mainContainer.firstChild) {
        mainContainer.removeChild(mainContainer.firstChild);
      };
      mainContainer.appendChild(event.appendEventForm());
    }
  },
  messages: {
    createDOM() {
      while (mainContainer.firstChild) {
        mainContainer.removeChild(mainContainer.firstChild);
      };
      mainContainer.appendChild(messages.buildForm());
      mainContainer.appendChild(messages.listCards());
    },
    reloadDOM() {
      while (mainContainer.childNodes[1]) {
        mainContainer.removeChild(mainContainer.childNodes[1]);
      };
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
