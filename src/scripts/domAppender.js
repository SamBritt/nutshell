import domStructure from "./domStructure";
import fetch from "./APIcaller";
import apiStructure from "./APIstructure";

const domAppender = {
    appendTaskForm() {
        let taskSection = document.querySelector("#tasks-section");
        taskSection.appendChild(domStructure.buildTaskForm());
    },
    //Writes the form functions for the articles component to the DOM.
    appendArticlesForm() {
        let articlesSection = document.querySelector("#articles-section");
        articlesSection.appendChild(domStructure.buildArticlesForm());
    }
};

export default domAppender;
