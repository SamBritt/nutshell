import build from "./constructors"
import action from "./eventHandlerManager"


const domStructure = {

  nav: {
    createNavItem (page) {
      const navItem = build.elementWithText("li", "", null, "nav-item")
      const navLink = build.elementWithText("a", page, `nav--${page}`, "nav-link");
      navLink.setAttribute("href", "#");
      navItem.appendChild(navLink);
      return navItem;
    },
    createNavBar() {
      
      const navList = build.elementWithText("ul", "", null, "navbar-nav");
      navList.appendChild(this.createNavItem("home"));
      navList.appendChild(this.createNavItem("articles"));
      navList.appendChild(this.createNavItem("events"));
      navList.appendChild(this.createNavItem("messages"));
      navList.appendChild(this.createNavItem("friends"));
      navList.addEventListener("click", action.handleNavigation)
      return navList;
    }
  },
    
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
  },
  //This function builds the forms for the Articles component and will be appended to the DOM by the appendArticlesForm
  //function in domAppender.js
  buildArticlesForm() {
    const form = build.elementWithTextCreator("form", undefined, "buildFormArticles", undefined);

    const labelForTitle = build.elementWithTextCreator("label", "Enter Articles Title: ", undefined, undefined);
    let inputTitle = build.inputCreator("text", "titleInputArticles");
    form.appendChild(labelForTitle);
    form.appendChild(inputTitle);

    const labelForSynopsis = build.elementWithTextCreator("label", "Enter Articles Synopsis: ", undefined, undefined);
    let inputSynopsis = build.inputCreator("text", "synopsisInputArticles");
    form.appendChild(labelForSynopsis);
    form.appendChild(inputSynopsis);

    const labelForUrl = build.elementWithTextCreator("label", "Enter Articles URL: ", undefined, undefined);
    let inputUrl = build.inputCreator("text", "urlInputArticles");
    form.appendChild(labelForUrl);
    form.appendChild(inputUrl);

    let formSubmitButton = build.buttonCreator("submitFormArticles", "Submit Articles", undefined);
    formSubmitButton.addEventListener("click", action.handleArticlesSubmit);
    form.appendChild(formSubmitButton);

    return form;
  }

}

export default domStructure