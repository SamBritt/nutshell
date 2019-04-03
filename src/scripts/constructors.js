const constructors = {
  elementWithTextCreator(
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

  inputCreator(elementType, elementId) {
    let inputElement = document.createElement("input");
    inputElement.type = elementType;
    inputElement.id = elementId;
    return inputElement;
  },

  buttonCreator(elementId, elementText, elementClass) {
    let button = document.createElement("button");
    button.id = elementId;
    button.setAttribute("type", "submit");
    button.textContent = elementText;
    button.classList.add(elementClass);
    return button;
  },

  fieldsetCreator(dataitem) {
    const formFieldSet = elementWithTextCreator("fieldset");
    formFieldSet.appendChild(
      elementWithTextCreator("label", `Enter ${dataitem}: `)
    );
    formFieldSet.appendChild(this.inputCreator("text", `${dataitem}Input`));
    return formFieldSet;
  }
};

export default constructors;
