import build from "./constructors"
import event from "./eventHandlerManager"


const domStructure = {
  task: {
    buildForm() {
    const form = build.elementWithText("form", "", "buildTaskForm", "inputForm");

    form.appendChild(build.fieldset("Enter Task Name", "text", "taskName"));
    form.appendChild(build.fieldset("Enter Completion Date", "date", "taskDate"));

    let formSubmitButton = build.buttonCreator("submitFormTask", "Submit Task", "saveButton");
    formSubmitButton.addEventListener("click", () => console.log("Clicked that ish"));
    form.appendChild(formSubmitButton);

    return form;
  }
},
event: {
  buildForm() {
  const form = build.elementWithText("form", undefined, "buildFormTask", undefined);

  const labelForName = build.elementWithText("label", "Enter Task Name: ", undefined, undefined);
  let inputName = build.inputCreator("text", "nameInputTask");
  form.appendChild(labelForName);
  form.appendChild(inputName);

  const labelForDate = build.elementWithText("label", "Enter Date: ", undefined, undefined);
  let inputDate = build.inputCreator("date", "dateInputTask");
  form.appendChild(labelForDate)
  form.appendChild(inputDate)

  let formSubmitButton = build.buttonCreator("submitFormTask", "Submit Task", undefined);
  formSubmitButton.addEventListener("click", () => console.log("Clicked that ish"));
  form.appendChild(formSubmitButton);

  return form;
},
  postToDOM (eventObject) {
    const eventDate = eventObject.date;
    const eventName = eventObject.name;
    const eventLocation = eventObject.location;
    const eventID = `eventCard--${eventObject.id}`;

    const buildDIV = build.elementWithText("div", "", eventID, "card");
    // buildDIV.classList.add("w-25");


    buildDIV.appendChild(build.elementWithText("h3", eventName));

    buildDIV.appendChild(build.elementWithText("p", eventDate));

    buildDIV.appendChild(build.elementWithText("p", eventLocation));

    const deleteButton = build.buttonCreator(`delete--${eventID}`, "Delete Event", "deleteButton");
    deleteButton.addEventListener("click", event.handleDeleteButton);
   buildDIV.appendChild(deleteButton);

    const editButton = build.buttonCreator(`edit--${eventID}`, "Edit Entry", "editButton");
    editButton.addEventListener("click", event.handleEditButton);
    buildDIV.appendChild(editButton);

    return buildDIV;
    
  }
}
}

export default domStructure