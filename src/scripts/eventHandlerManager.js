import fetch from "./APIcaller"
import build from "./APIstructure"

const eventHandler = {
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