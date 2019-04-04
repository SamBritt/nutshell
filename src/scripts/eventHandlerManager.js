import fetch from "./APIcaller"
import build from "./APIstructure"
import append from "./domAppender"

const eventHandler = {
    handleTaskSubmit(){
        //Scrapes values of name/date inputs
        //Converts to object using postTask in APIStructure
        //Performs a POST request using that object.
        //Retrieves updated list, then appends to DOM
        let taskName = document.querySelector("#nameInputTask");
        let taskDate = document.querySelector("#dateInputTask");

        let entryToPost = build.postTask(taskName.value, taskDate.value, false);
        fetch.postOne("tasks", entryToPost).then(() => fetch.getAll("tasks")).then(response => append.appendTasks(response))
    }
}

export default eventHandler