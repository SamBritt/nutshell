import domStructure from "./domStructure";
import fetch from "./APIcaller";
import apiStructure from "./APIstructure";
import constructor from "./constructors"

const domAppender = {
    clearElement(domElement) {
        while (domElement.firstChild) {
            domElement.removeChild(domElement.firstChild);
        }
    },
    appendTaskForm() {
        let taskSection = document.querySelector("#tasks-section");
        taskSection.appendChild(domStructure.buildTaskForm());
    },
    //Creates a container for DOM elements to be displayed
    createTaskContainer(){
        const taskSection = document.getElementById("tasks-section");
        const article = constructor.elementWithTextCreator("article", undefined, "taskArticle")
        taskSection.appendChild(article);

    },
    //Loops through task objects, creates HTML structure for each, then appends
    //to DOM
    appendTasks(tasks) {
        let taskArticle = document.getElementById("taskArticle");

        let docFrag = document.createDocumentFragment();
        tasks.forEach(element => {
            docFrag.appendChild(domStructure.buildTaskComponent(element))
        });
        this.clearElement(taskArticle);

        taskArticle.appendChild(docFrag);
    }
};

export default domAppender;
