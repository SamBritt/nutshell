import build from "./constructors"

const APIstructure = {
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