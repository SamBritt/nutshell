import domStructure from "./domStructure";
import fetch from "./APIcaller";
import apiStructure from "./APIstructure";
import action from "./eventHandlerManager"
import build from "./constructors"

const userIDstring = window.sessionStorage.getItem("userID");
const userID = parseInt(userIDstring);

const messages = {

  //this pulls the data from the messages API and uses the structure built in the POSTtoDOM function to build the cards. It is used in the DOMappender to create the DOM for the message page.
  listCards() {
    const formArticle = document.createElement("article");
    formArticle.classList.add("card-deck")
    formArticle.id = "messages-article";
    fetch.getAll("messages?_expand=user").then(messages => {
      const sortMessages = (objectArray) => {
        return objectArray.sort(function(a, b){
          return new Date(b.timeStamp) - new Date(a.timeStamp);
        });
      }
      const sortedMessages = sortMessages(messages).slice(0,10);
      console.log(sortedMessages);
      let docFrag = document.createDocumentFragment();
      sortedMessages.forEach(messageObject => {
        docFrag.appendChild(this.postToDOM(messageObject));
  
      }); formArticle.appendChild(docFrag)
    })
    return formArticle
  },

  //builds the input form for creating a new message, does not currently post to API or DOM
    buildForm() {
    const form = build.elementWithText("form", "", "messageForm", "inputForm");

    form.appendChild(build.fieldset("Enter a message", "text", "message"));

    let formSubmitButton = build.button("postMessageButton", "Post Message", "saveButton");
    formSubmitButton.addEventListener("click", action.handleMessageSubmit);
    form.appendChild(formSubmitButton);

    return form;
},
//creates edit form within the message card on the DOM
    editForm(messageObject) {
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
  const messageUser = messageObject.user.userName;
  const messageText = messageObject.message;
  const messageID = `messageCard--${messageObject.id}`;
  const friendID = messageObject.user.id
  console.log(friendID)
  const buildDIV = build.elementWithText("div", "", messageID, "card");

  buildDIV.appendChild(build.elementWithText("h4", messageUser));

  buildDIV.appendChild(build.elementWithText("p", messageText));

  const friendButton = build.button(`friends--${friendID}`, "Add Friend?", "button");
  friendButton.addEventListener("click", action.addFriendButton);

  fetch.getAll(`users/${userID}/friends?_expand=otherFriend`).then(friends => {
  let addFriend = friends.find(friend => {
    return friend.otherFriendId === friendID;
  });
  if (!addFriend && friendID !== userID) {
 buildDIV.appendChild(friendButton);
  }});

  const editButton = build.button(`edit--${messageID}`, "Edit Entry", "button");
  editButton.addEventListener("click", action.handleEditButton);
  if (window.sessionStorage.getItem("userName") === messageUser) {
  buildDIV.appendChild(editButton);
  buildDIV.classList.add("currentUser");
  }
  return buildDIV;

}
}

export default messages