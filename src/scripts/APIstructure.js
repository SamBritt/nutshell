import build from "./constructors"

const APIstructure = {
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