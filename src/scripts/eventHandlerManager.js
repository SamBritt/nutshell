import fetch from "./APIcaller"
import build from "./APIstructure"

const eventHandler = {
    //Function to capture the values of data entered into the forms when the submit button is pressed. 
    handleArticlesSubmit() {
        let articlesTitle = document.querySelector("#titleInputArticles")
        let articlesSynopsis = document.querySelector("#synopsisInputArticles")
        let articlesTimeStamp = "test"
        let articlesUrl = document.querySelector("#urlInputArticles")

        let entryToPost = build.postArticles(articlesTitle.value, articlesSynopsis.value, "", articlesUrl.value)
        console.log(entryToPost)
        fetch.postOne("articles", entryToPost)
    }
}

export default eventHandler