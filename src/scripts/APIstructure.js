import build from "./constructors"

const userIDstring = window.sessionStorage.getItem("userID");
const userID = parseInt(userIDstring);

const APIstructure = {
    //Function to create a repository for staging values of the data collected in the articles forms, so they can be posted to the JSON.
    postArticle(newsTitle, synopsis, timeStamp, url) {
        let articlesObject = {
            "userId": userID,
            "newsTitle": newsTitle,
            "synopsis": synopsis,
            "timeStamp": timeStamp,
            "url": url
        }
        return articlesObject
    },
    //Creates Task object to post to JSON server
    postTask(task, completeDate, complete) {
        let taskObject = {
            "userId": userID,
            "task": task,
            "completeDate": completeDate,
            "complete": complete
        }
        return taskObject;

    },
    postMessage(message, time) {
        let messageObject = {
            "userId": userID,
            "timeStamp": time,
            "message": message,
        }
        return messageObject;
    },
    postUser(username, email) {
        let userObject = {
            "userName": username,
            "email": email
        }
        return userObject;
    },
    postFriend(friendID) {
        let friendObject = {
            "userId": userID,
            "otherFriendId": parseInt(friendID)
        }
        return friendObject;
    },

}

export default APIstructure