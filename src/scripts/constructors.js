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
      htmlElement.id = elementClass;
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
    button.classList.add(elementClass);
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
  }
};

export default constructors;
