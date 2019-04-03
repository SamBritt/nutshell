import build from "./constructors"

const domStructure = {
  buildTaskHTML (task) {
    buildElement("div", `task--${task.id}`);
    

  }
}

export default domStructure