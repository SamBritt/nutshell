import domStructure from "./domStructure";
import fetch from "./APIcaller";
import apiStructure from "./APIstructure";
import action from "./eventHandlerManager"
import build from "./constructors"

const userIDstring = window.sessionStorage.getItem("userID");
const userID = parseInt(userIDstring);



const friends = {

  //this pulls the data from the friends API and uses the structure built in the POSTtoDOM function to build the cards. It is used in the DOMappender to create the DOM for the message page.
  listCards() {
    const formArticle = document.createElement("article");
    formArticle.classList.add("card-deck")
    formArticle.id = "friends-article";
    formArticle.appendChild(build.elementWithText("h1", `${window.sessionStorage.getItem("userName")}'s Friends: `, "friendPageHeader"));
    fetch.getAll(`users/${userID}/friends?_expand=otherFriend`).then(friends => {

      let docFrag = document.createDocumentFragment();
      friends.forEach(friendObject => {
        docFrag.appendChild(this.postToDOM(friendObject));
  
      }); formArticle.appendChild(docFrag)
    })
    return formArticle
  },

  //builds the input form for creating a new message, does not currently post to API or DOM
    buildForm() {
    const form = build.elementWithText("form", "", "friendForm", "inputForm");

    form.appendChild(build.fieldset("Search for a friend", "text", "friend"));

    let formSubmitButton = build.button("postMessageButton", "Post Message", "saveButton");
    formSubmitButton.addEventListener("click", action.handleFriendSearch);
    form.appendChild(formSubmitButton);

    return form;
},

//creates message object used turn API data into HTML.
postToDOM (friendObject) {
  const friendUser = friendObject.otherFriend.userName;
  const friendID = `friendCard--${friendObject.id}`;

  const buildDIV = build.elementWithText("div", "", friendID, "card");

  buildDIV.appendChild(build.elementWithText("h4", friendUser));

  const deleteButton = build.button(`delete--${friendID}`, "Delete friend", "button");
  deleteButton.addEventListener("click", action.handleDeleteButton);
 buildDIV.appendChild(deleteButton);

  return buildDIV;

}
}

export default friends