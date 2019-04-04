import build from "./constructors"

const APIstructure = {

    //Function to create a repository for staging values of the data collected in the articles forms, so they can be posted to the JSON.
    postArticles(newsTitle, synopsis, timeStamp, url) {
        let articlesObject = {
            "userId": 1,
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
            "userId": 1,
            "task": task,
            "completeDate": completeDate,
            "complete": complete
        }
        return taskObject;

    }
}

export default APIstructure