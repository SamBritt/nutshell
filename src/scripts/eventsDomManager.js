// This module imports the functions in constructors.js and calls them to create the input form for new events.
import buildHTML from "./constructors"
import handlers from "./eventsTabHandlers"
// Object to export that holds functions as methods.
const buildEventFormHTML = {
    // Function to build the HTML form
    buildEventButton() {
        const createEventsButton = buildHTML.buttonCreator("eventsButton", "Add New Event", undefined);
        // Event listener removes the class is--hidden from the element and prints the form to the dom when clicked
        createEventsButton.addEventListener("click", handlers.addNewEventHandler);
        return createEventsButton
    },
    buildEventForm() {
        const form = buildHTML.elementWithTextCreator("form", undefined, "buildFormEvent", undefined);
        form.className = "is--hidden"

        const createEventLabel = buildHTML.elementWithTextCreator("label", "Event Name: ", undefined, undefined);
        console.log(createEventLabel)
        form.append(createEventLabel)

        const newEventInput = buildHTML.inputCreator("text", "newEvent");
        form.append(newEventInput)

        const createEventDateLabel = buildHTML.elementWithTextCreator("label", "Date: ", undefined, undefined);
        form.append(createEventDateLabel);
        const eventDateInput = buildHTML.inputCreator("date", "newEventDate");
        form.append(eventDateInput);

        const createEventLocationLabel = buildHTML.elementWithTextCreator("label", "Event Location: ", undefined, undefined);
        form.append(createEventLocationLabel);

        const eventLocationInput = buildHTML.inputCreator("text", "eventLocation");
        form.append(eventLocationInput)

        const createEventSaveButton = buildHTML.buttonCreator("saveEvent", "Save Event", undefined)
        // Event listener console logs 'this will save your event' when clicked to demonstrate that it works. Event handler has yet to be added.
        createEventSaveButton.addEventListener("click", handlers.saveEventHandler)
        form.append(createEventSaveButton);

        const eventEditButton = buildHTML.buttonCreator("editEvent", "Edit Event", undefined);
        eventEditButton.addEventListener("click", console.log("Wow you're really taking a shine to this, aren't ya buddy?"))
        form.append(eventEditButton)
        return form
    },
    buildEventComponent(newEvent){
        const section = buildHTML.elementWithTextCreator("section", undefined, `eventSection--${newEvent.id}`);
        const nameH1 = buildHTML.elementWithTextCreator("h1", `${newEvent.name}`);
        const eventLocationLabel = buildHTML.elementWithTextCreator("label", "Event Location: ", undefined, undefined);
        const eventDateLabel = buildHTML.elementWithTextCreator("label", "Date: ", undefined, undefined);
        const eventLocation = buildHTML.elementWithTextCreator("p", `${newEvent.location}`)
        const dateDiv = buildHTML.elementWithTextCreator("div", `${newEvent.date}`);
        eventLocationLabel.appendChild(eventLocation);
        eventDateLabel.appendChild(dateDiv);
        section.appendChild(nameH1);
        section.appendChild(eventDateLabel);
        section.appendChild(eventLocationLabel);
    
        return section;

    }


};


export default buildEventFormHTML;