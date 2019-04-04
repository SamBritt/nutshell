import domStructure from "./domStructure";
import fetch from "./APIcaller";
import apiStructure from "./APIstructure";
import build from "./constructors";
import messages from "./messages";


// organizes the DOM appender so that navigation can dynamically target specific pages and create them. 
const domAppender = {
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
  }
};

export default domAppender;
