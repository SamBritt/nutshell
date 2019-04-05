import eventsHTML from "./eventsDomManager"

const eventsHandler = {
    // Event handler to print new event form to the DOM
    addNewEventHandler() {
        // Selecting the element with the class is--hidden and storing it in the variable formSection
        let formSection = document.querySelector(".is--hidden")
        // Removes the class is--hidden from the element formSection
        formSection.classList.remove("is--hidden")
    },
    saveEventHandler() {
        let eventName = document.querySelector("#newEvent").value;
        let eventDate = document.querySelector("#newEventDate").value;
        let eventLocation = document.querySelector("#eventLocation").value;
        console.log(eventName, eventDate, eventLocation)
    }
}

export default eventsHandler