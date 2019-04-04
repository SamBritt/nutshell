import domStructure from "./domStructure";
import fetch from "./APIcaller";
import apiStructure from "./APIstructure";

const domAppender = {
    appendTaskForm() {
        let taskSection = document.querySelector("#tasks-section");
        taskSection.appendChild(domStructure.buildTaskForm());
    }
};

export default domAppender;
