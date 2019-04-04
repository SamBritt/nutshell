// import eventsHTML from "./eventsDomManager"
import buildEventForm from "./eventsDomManager";
// import constructor from "../constructors"

const eventsAppender = {
    appendEventForm() {
        let eventSection = document.querySelector("#events-section");
        console.log(eventSection)
        eventSection.appendChild(buildEventForm.buildEventButton());
        eventSection.appendChild(buildEventForm.buildEventForm());
        eventSection.appendChild(buildEventForm.eventSaveButton());
    }

};

export default eventsAppender;