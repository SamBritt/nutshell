const constructors = {
  elementWithText(
    elementType,
    elementTextContent,
    elementID,
    elementClass
  ) {
    let htmlElement = document.createElement(elementType);
    htmlElement.textContent = elementTextContent;
    if (elementID) {
      htmlElement.id = elementClass;
    }
    if (elementClass) {
      htmlElement.classList.add(elementClass);
    }
    return htmlElement;
  },

  inputCreator(elementType, elementId, elementClass) {
    let inputElement = document.createElement("input");
    inputElement.type = elementType;
    inputElement.id = elementId;
    if(elementClass) {
      inputElement.classList.add(elementClass)
    }
    return inputElement;
  },

  buttonCreator(elementId, elementText, elementClass) {
    let button = document.createElement("button");
    button.id = elementId;
    button.setAttribute("type", "submit");
    button.textContent = elementText;
    
    button.classList.add(elementClass);
    button.classList.add("btn", "btn-primary");
    return button;
  },

  fieldset(labelText, inputType, page) {
    const formFieldSet = document.createElement("fieldset");
    formFieldSet.classList.add("form-group");
    formFieldSet.appendChild(
      this.elementWithText("label", `${labelText}: `)
    );
    formFieldSet.appendChild(this.inputCreator(inputType, `${page}InputForm`, "form-control"));
    return formFieldSet;
  }
};

export default constructors;
