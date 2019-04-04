import fetch from "./APIcaller"
import build from "./APIstructure"
import append from "./domAppender"

const eventHandler = {
    handleTaskSubmit(){
        let taskName = document.querySelector("#nameInputTask");
        let taskDate = document.querySelector("#dateInputTask");

        let entryToPost = build.postTask(taskName.value, taskDate.value, false);
        fetch.postOne("tasks", entryToPost).then(() => fetch.getAll("tasks")).then(response => append.appendTasks(response))
    }
}

export default eventHandler