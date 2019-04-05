// This module imports the functions in constructors.js and calls them to create the input form for new events.
import buildHTML from "./constructors"
// Object to export that holds functions as methods.
const buildEventFormHTML = {
    // Function to build the HTML form
    buildEventButton() {
        const createEventsButton = buildHTML.buttonCreator("eventsButton", "Add New Event", undefined);
        // Event listener console logs 'clicked' when clicked to demonstrate that it works. Event handler has yet to be added.
        createEventsButton.addEventListener("click", () => console.log("wow what a dream"));
        return createEventsButton
    },
    buildEventForm() {
        const form = buildHTML.elementWithTextCreator("form", undefined, "buildFormEvent", undefined);

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
        return form
    },
    eventSaveButton () {
        const createEventSaveButton = buildHTML.buttonCreator("saveEvent", "Save Event", undefined)
           // Event listener console logs 'this will save your event' when clicked to demonstrate that it works. Event handler has yet to be added.
        createEventSaveButton.addEventListener("click", () => console.log("this will save your event"))
        return createEventSaveButton
    }



};


export default buildEventFormHTML;