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
    buildForm(value) {
    const form = build.elementWithText("form", "", "messageForm", "inputForm");

    form.appendChild(build.fieldset("Enter a message", "text", "message"));

    let formSubmitButton = build.button("postMessageButton", "Post Message", "saveButton");
    formSubmitButton.addEventListener("click", action.handleMessageSubmit);
    form.appendChild(formSubmitButton);

    return form;
},
    editForm(messageObject) {
      const messageTime = messageObject.timeStamp;
      const messageUser = messageObject.userId;
      const messageText = messageObject.message;
      const messageID = `messageEdit--${messageObject.id}`;

    const form = build.elementWithText("form", "", messageID, "inputForm");
    form.appendChild(build.fieldset("Enter a message", "text", "editMessage", messageText));
      
    let formSubmitButton = build.button("editMessageButton", "Post Edited Message");
    formSubmitButton.addEventListener("click", action.messageEditSubmit);
    form.appendChild(formSubmitButton);

    return form;
},
//creates message object used turn API data into HTML.
postToDOM (messageObject) {
  const messageTime = messageObject.timeStamp;
  const messageUser = messageObject.userId;
  const messageText = messageObject.message;
  const messageID = `messageCard--${messageObject.id}`;

  const buildDIV = build.elementWithText("div", "", messageID, "card");

  buildDIV.appendChild(build.elementWithText("h4", messageUser));

  buildDIV.appendChild(build.elementWithText("p", messageTime));

  buildDIV.appendChild(build.elementWithText("p", messageText));

  const deleteButton = build.button(`delete--${messageID}`, "Delete message", "button");
  deleteButton.addEventListener("click", action.handleDeleteButton);
 buildDIV.appendChild(deleteButton);

  const editButton = build.button(`edit--${messageID}`, "Edit Entry", "button");
  editButton.addEventListener("click", action.handleEditButton);
  buildDIV.appendChild(editButton);

  return buildDIV;

}
}

export default messages