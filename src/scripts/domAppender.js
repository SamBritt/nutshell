import domStructure from "./domStructure";
import fetch from "./APIcaller";
import build from "./constructors";
import messages from "./messages";
import event from "./eventsAppender"
import eventHandler from "./eventHandlerManager"
import welcome from "./welcome"
import home from "./home"

// organizes the DOM appender so that navigation can dynamically target specific pages and create them.
const userIDstring = window.sessionStorage.getItem("userID");
const userID = parseInt(userIDstring);
const mainContainer = document.querySelector("#main-container");

const domAppender = {
  clearElement(domElement) {
    while (domElement.firstChild) {
      domElement.removeChild(domElement.firstChild);
    }
  },
//this is called to create the NavBar once the user is logged in.
  nav: {
    appendNav() {
      const navBar = document.querySelector("#output");
      navBar.appendChild(domStructure.nav.createNavBar());
    }
  },
  home: {
    createDOM() {
      while (mainContainer.firstChild) {
        mainContainer.removeChild(mainContainer.firstChild);
      };
      const homeNav = document.querySelector("#nav--home");
      homeNav.classList.add("active");
      mainContainer.appendChild(home.homePage());

    }


  },
  welcome: {
    // this is the initial function to load the DOM. it checks the session storage to see if a user is currently logged in, and if so, loads the home page, otherwise, it directs to the login page.
    createDOM() {
      if (window.sessionStorage.getItem("userName")) {
        domAppender.nav.appendNav();
        domAppender.home.createDOM();
      } else {
        let welcomePage = document.createElement("article");
        welcomePage.id = "welcome-page"
        welcomePage.appendChild(build.elementWithText("h1", "Welcome to Nutshell"));
      welcomePage.appendChild(welcome.loginForm());
      welcomePage.appendChild(welcome.newUser());
      mainContainer.appendChild(welcomePage)
    }
  },

  //this is used by the registration event handler to create the DOM for a new user form.
  createRegistration() {
    while (mainContainer.firstChild) {
      mainContainer.removeChild(mainContainer.firstChild);
    };

    mainContainer.appendChild(welcome.registerUserForm());
  }

  },
  tasks: {
    createDOM() {
      while (mainContainer.firstChild) {
        mainContainer.removeChild(mainContainer.firstChild);
      };
      mainContainer.appendChild(this.appendTaskForm());
      mainContainer.appendChild(this.createTaskContainer());
      
    },
    reloadDOM() {
      while (mainContainer.childNodes[1]) {
        mainContainer.removeChild(mainContainer.childNodes[1]);
      };
    },
    appendTaskForm() {
      let taskSection = document.createElement("section");
      taskSection.id = "tasks-section";
      taskSection.appendChild(domStructure.buildTaskForm());
      return taskSection;
    },
    //Creates a container for DOM elements to be displayed
    createTaskContainer() {
      // const taskSection = document.getElementById("tasks-section");
      const article = build.elementWithTextCreator("article", undefined, "taskArticle", "card-deck")
      // taskSection.appendChild(article);
      return article;
    },
    //Loops through task objects, creates HTML structure for each, then appends
    //to DOM
    appendTasks(tasks) {
      let taskArticle = document.getElementById("taskArticle");

      let docFrag = document.createDocumentFragment();
      tasks.forEach(element => {
        if (element.complete === false) {
          docFrag.appendChild(domStructure.buildTaskComponent(element))
        }
      });
      domAppender.clearElement(taskArticle);

      taskArticle.appendChild(docFrag);

    }
  },
  articles: {
    createDOM() {
      while (mainContainer.firstChild) {
        mainContainer.removeChild(mainContainer.firstChild);
      };
      mainContainer.appendChild(this.appendArticlesForm());
      mainContainer.appendChild(this.listArticles());
    },
    reloadDOM() {
      while (mainContainer.childNodes[1]) {
        mainContainer.removeChild(mainContainer.childNodes[1]);
      };
      mainContainer.appendChild(this.listArticles());
    },
    //Writes the form functions for the articles component to the DOM.
    appendArticlesForm() {
      let articlesSection = document.createElement("section");
      articlesSection.id = "articles-section"
      articlesSection.appendChild(domStructure.buildArticlesForm());
      return articlesSection
    },
    //This pulls the data from the aritcles API and uses the structure built in the
    // POSTtoDOM function to build the cards. It is used in the DOMappender to create the DOM for the articles page. `users/${userID}/articles`
    listArticles() {
      const formSection = document.createElement("article");
      formSection.classList.add("card-deck")
      formSection.id = "articles-section";
      fetch.getAll(`users/${userID}/articles`)
        .then(articles => {
          let docFrag = document.createDocumentFragment();
          articles.forEach(articlesObject => {
            docFrag.appendChild(this.postToDOM(articlesObject));
          });
          formSection.appendChild(docFrag)
        })
      return formSection
    },
    //Creates articles object used turn API data into HTML.
    postToDOM(articlesObject) {
      const articlesTitle = articlesObject.newsTitle;
      const articlesSynopsis = articlesObject.synopsis;
      const articlesUrl = articlesObject.url;
      const articlesTime = articlesObject.timeStamp;
      const articlesID = `articlesCard--${articlesObject.id}`

      const buildDIV = build.elementWithText("div", "", articlesID, "card");
      buildDIV.appendChild(build.elementWithText("h4", articlesTitle));
      buildDIV.appendChild(build.elementWithText("p", articlesSynopsis));
      buildDIV.appendChild(build.elementWithText("p", articlesUrl));
      buildDIV.appendChild(build.elementWithText("p", articlesTime));
      

      const deleteButton = build.button(`delete--${articlesID}`, "Delete Article", "button");
      deleteButton.addEventListener("click", eventHandler.handleDeleteButton);
      buildDIV.appendChild(deleteButton);

      const editButton = build.button(`edit--${articlesID}`, "Edit Article", "button");
      editButton.addEventListener("click", eventHandler.handleArticleEditButton);
      buildDIV.appendChild(editButton);


      return buildDIV;
    }
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
  }
};

export default domAppender;