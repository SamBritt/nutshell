import build from "./constructors"

const userID = window.sessionStorage.getItem("userID")

const APIstructure = {

    //Function to create a repository for staging values of the data collected in the articles forms, so they can be posted to the JSON.
    postArticles(newsTitle, synopsis, timeStamp, url) {
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
    postMessage(message) {
        let messageObject = {
            "userId": userID,
            "timestamp": "test",
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
    }
}

export default APIstructure