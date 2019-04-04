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
    }
}

export default APIstructure