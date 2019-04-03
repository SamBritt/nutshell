import build from "./constructors"

const domStructure = {
  buildTaskFormButton() {
    let createTaskButton = build.buttonCreator("taskButtonTask", "Create New Task", undefined);
    createTaskButton.addEventListener("click", () => console.log("Clicked!"));
  },
  buildTaskForm() {
    const form = build.elementWithTextCreator("form", undefined, "buildFormTask", undefined);

    const labelForName = build.elementWithTextCreator("label", "Enter Task Name: ", undefined, undefined);
    let inputName = build.inputCreator("text", "nameInputTask");
    form.appendChild(labelForName);
    form.appendChild(inputName);

    const labelForDate = build.elementWithTextCreator("label", "Enter Date: ", undefined, undefined);
    let inputDate = build.inputCreator("date", "dateInputTask");
    form.appendChild(labelForDate)
    form.appendChild(inputDate)

    let formSubmitButton = build.buttonCreator("submitFormTask", "Submit Task", undefined);
    formSubmitButton.addEventListener("click", () => console.log("Clicked that ish"));
    form.appendChild(formSubmitButton);

    return form;
  }
}

export default domStructure