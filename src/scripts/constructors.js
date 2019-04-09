const constructors = {
  //Creates an HTML element with values: type, textContent, id, and class
  elementWithTextCreator(
    elementType,
    elementTextContent,
    elementID,
    elementClass
  ) {
    let htmlElement = document.createElement(elementType);
    htmlElement.textContent = elementTextContent;
    if (elementID) {
      htmlElement.id = elementID;
    }
    if (elementClass) {
      htmlElement.classList.add(elementClass);
    }
    return htmlElement;
  },
  //Creates an HTML element with values: type and id
  inputCreator(elementType, elementId) {
    let inputElement = document.createElement("input");
    inputElement.type = elementType;
    inputElement.id = elementId;
    return inputElement;
  },
  //Creates an HTML button element with values: id, textContent, and class
  buttonCreator(elementId, elementText, elementClass) {
    let button = document.createElement("button");
    button.id = elementId;
    button.setAttribute("type", "button");
    button.textContent = elementText;
    button.classList.add("button");
    return button;
  },
  //Creates an HTML fieldset element with values: textContent, type and id
  fieldsetCreator(dataitem) {
    const formFieldSet = elementWithTextCreator("fieldset");
    formFieldSet.appendChild(
      elementWithTextCreator("label", `Enter ${dataitem}: `)
    );
    formFieldSet.appendChild(this.inputCreator("text", `${dataitem}Input`));
    return formFieldSet;
  },
  elementWithText(
    elementType,
    elementTextContent,
    elementID,
    elementClass
  ) {
    let htmlElement = document.createElement(elementType);
    htmlElement.textContent = elementTextContent;
    if (elementID) {
      htmlElement.id = elementID;
    }
    if (elementClass) {
      htmlElement.classList.add(elementClass);
    }
    return htmlElement;
  },
  input(elementType, elementId, elementClass) {
    let inputElement = document.createElement("input");
    inputElement.type = elementType;
    inputElement.id = elementId;
    if (elementClass) {
      inputElement.classList.add(elementClass)
    }
    return inputElement;
  },

  button(elementId, elementText, elementClass) {
    let button = document.createElement("button");
    button.id = elementId;
    button.setAttribute("type", "button");
    button.textContent = elementText;

    button.classList.add(elementClass);
    button.classList.add("button");
    return button;
  },

  fieldset(labelText, inputType, page, value) {
    const formFieldSet = document.createElement("fieldset");
    formFieldSet.classList.add("form-group");
    formFieldSet.appendChild(
      this.elementWithText("label", `${labelText}: `)
    );
    const inputElement = this.input(inputType, `${page}InputForm`, "form-control");
    if (value) {
      inputElement.value = value;
    }
    formFieldSet.appendChild(inputElement);

    return formFieldSet;
  },
  clearElement (domElement) {
    while (domElement.firstChild) {
      domElement.removeChild(domElement.firstChild);
    }
  }
};

export default constructors;