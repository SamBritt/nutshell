import domStructure from "./domStructure";
import fetch from "./APIcaller";
import apiStructure from "./APIstructure";
import action from "./eventHandlerManager"
import build from "./constructors"

const messages = {

  //this pulls the data from the messages API and uses the structure built in the POSTtoDOM function to build the cards. It is used in the DOMappender to create the DOM for the message page.
  listCards() {
    const formArticle = document.createElement("article");
    formArticle.classList.add("card-deck")
    formArticle.id = "messages-article";
    fetch.getAll("messages").then(messages => {
      let docFrag = document.createDocumentFragment();
      messages.forEach(messageObject => {
        docFrag.appendChild(this.postToDOM(messageObject));
  
      }); formArticle.appendChild(docFrag)
    })
    return formArticle
  },

  //builds the input form for creating a new message, does not currently post to API or DOM
    buildForm() {
    const form = build.elementWithText("form", "", "buildTaskForm", "inputForm");

    form.appendChild(build.fieldset("Enter a message", "text", "taskName"));
    form.appendChild(build.fieldset("Enter Completion Date", "date", "taskDate"));

    let formSubmitButton = build.button("submitFormTask", "Submit Task", "saveButton");
    formSubmitButton.addEventListener("click", () => console.log("Clicked that ish"));
    form.appendChild(formSubmitButton);

    return form;
},

//creates message object used turn API data into HTML.
postToDOM (messageObject) {
  const messageTime = messageObject.timeStamp;
  const messageUser = messageObject.userID;
  const messageText = messageObject.message;
  const messageID = `messageCard--${messageObject.id}`;

  const buildDIV = build.elementWithText("div", "", messageID, "card");

  buildDIV.appendChild(build.elementWithText("h4", messageUser));

  buildDIV.appendChild(build.elementWithText("p", messageTime));

  buildDIV.appendChild(build.elementWithText("p", messageText));

  const deleteButton = build.button(`delete--${messageID}`, "Delete message", "deleteButton");
  deleteButton.addEventListener("click", action.handleDeleteButton);
 buildDIV.appendChild(deleteButton);

  const editButton = build.button(`edit--${messageID}`, "Edit Entry", "editButton");
  editButton.addEventListener("click", action.handleEditButton);
  buildDIV.appendChild(editButton);

  return buildDIV;
  
}
}

export default messages