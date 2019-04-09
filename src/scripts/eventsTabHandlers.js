import eventsHTML from "./eventsDomManager"
import API from "./eventsAPIManager"
import list from "./listEvents"
import DOM from "./domAppender"
import domAppender from "./domAppender";

const eventsHandler = {
    // Event handler to print new event form to the DOM
    addNewEventHandler() {
        // Selecting the element with the class is--hidden and storing it in the variable formSection
        let formSection = document.querySelector(".is--hidden")
        // Removes the class is--hidden from the element formSection
        formSection.classList.remove("is--hidden")
    },
    // Event handler to post
    saveEventHandler() {
        let eventName = document.querySelector("#newEvent").value;
        let eventDate = document.querySelector("#newEventDate").value;
        let eventLocation = document.querySelector("#eventLocation").value;
        console.log(eventName, eventDate, eventLocation)

        const newEvent = {
                name: eventName,
                date: eventDate,
                location: eventLocation
            }
            
            API.postNewEvent(newEvent)
            .then(() => DOM.events.reloadDOM())
            
    },
    editEventHandler() {
        let editFormSection = document.querySelector(".edit-form-is--hidden");
        editFormSection.classList.remove("edit-form-is--hidden")
        
    }
}

export default eventsHandler