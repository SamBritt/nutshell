// This module is importing from eventsDomManager.js
import buildEventForm from "./eventsDomManager";

const eventsAppender = {
    appendEventForm() {
        // Selects the container with the id of events-section and assigns it to the variable eventSection
        let eventSection = document.createElement("section");
        eventSection.id = "events-section";
        // Appends the  add button, form and save button from eventsDomManager.js to the DOM
        eventSection.appendChild(buildEventForm.buildEventButton());
        eventSection.appendChild(buildEventForm.buildEventForm());
        return eventSection;
    }

};

export default eventsAppender;