import build from "./constructors"
import eventHandler from "./eventHandlerManager"

const domStructure = {
  buildTaskFormButton() {
    let createTaskButton = build.buttonCreator("taskButtonTask", "Create New Task", undefined);
    createTaskButton.addEventListener("click", () => console.log("Clicked!"));
  },
  buildTaskForm() {
    const section = build.elementWithTextCreator("section", undefined, "taskSection", undefined)
    const form = build.elementWithTextCreator("form", undefined, "buildFormTask", undefined);
    section.appendChild(form);

    const labelForName = build.elementWithTextCreator("label", "Enter Task Name: ", undefined, undefined);
    let inputName = build.inputCreator("text", "nameInputTask");
    form.appendChild(labelForName);
    form.appendChild(inputName);

    const labelForDate = build.elementWithTextCreator("label", "Enter Date: ", undefined, undefined);
    let inputDate = build.inputCreator("date", "dateInputTask");
    form.appendChild(labelForDate)
    form.appendChild(inputDate)

    let formSubmitButton = build.buttonCreator("submitFormTask", "Submit Task", undefined);
    formSubmitButton.addEventListener("click", eventHandler.handleTaskSubmit);
    form.appendChild(formSubmitButton);

    return section;
  },
  buildTaskComponent(taskEntry){
    const section = build.elementWithTextCreator("section", undefined, `taskSection--${taskEntry.id}`);
    const nameH1 = build.elementWithTextCreator("h1", `${taskEntry.task}`);
    const dateDiv = build.elementWithTextCreator("div", `${taskEntry.completeDate}`);
    const completedDiv = build.elementWithTextCreator("div", `${taskEntry.complete}`);

    section.appendChild(nameH1);
    section.appendChild(dateDiv);
    section.appendChild(completedDiv);

    return section;
  }
}

export default domStructure