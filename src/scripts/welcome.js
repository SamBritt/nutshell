import domStructure from "./domStructure";
import fetch from "./APIcaller";
import apiStructure from "./APIstructure";
import build from "./constructors";
import action from "./eventHandlerManager"
import domAppender from "./domAppender"

const welcome = {

  //this function builds the login form and the buttons for logging in as well as registering
    loginPage () {
        const form = build.elementWithText("form", "", "loginForm");
        form.appendChild(build.elementWithText("legend", "Log in to Nushell"));
        form.appendChild(build.fieldset("Enter username", "text", "username"));
        form.appendChild(build.fieldset("Enter Email Address", "text", "email"));

        let loginButton = build.button("loginButton","Submit", "button");
        loginButton.addEventListener("click", action.handleLogin);
        form.appendChild(loginButton);
        
        let newUserButton = build.button("newUserButton","New user?", "button");

        newUserButton.addEventListener("click", action.handleNewUser);
        form.appendChild(newUserButton);
        return form;
    },
    //this function is used by the login button event handler, it fetches the user database and checks the login values against current users. If there is a match, it directs to the home page, otherwise it sends an error alert.  
    getUserList() {
      fetch.getAll("users").then(usersArray => {
        let userName = document.querySelector("#usernameInputForm").value;
        let email = document.querySelector("#emailInputForm").value;
        let loginSuccess = usersArray.find(obj => {
          return obj.userName === userName && obj.email === email});
          
          if (loginSuccess) {
            window.sessionStorage.setItem("userName", userName);
            domAppender.nav.appendNav();
            domAppender.home.createDOM();
          } else {
            alert("Your username and/or email address did not match the information in our system, please retry or register a new account.")
          }
        
      })
    }

}


export default welcome