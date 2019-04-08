import API from "./eventsAPIManager"
import build from "./constructors"
import buildHTML from "./eventsDomManager"

export default {
    // This function lists the events from the database
    listAllEvents() {
        // Here we are calling the getAllEvents functions from the eventsAPIManager and chaining a .then from our original GET call
        API.getAllEvents().then(eventResponse => {
            console.log("event response", eventResponse)
            const eventsFragment = document.createDocumentFragment();
            // Our forEach loops through the array of objects from our database that represents our events. For each of the objects in our array, we are calling our function that builds the HTML for the events and then appending that component to the document fragment.
            eventResponse.forEach((event) => {
                const eventHTML = buildHTML.buildEventComponent(event)
                eventsFragment.appendChild(eventHTML)

            })
            // Once our loop has completed, we are selecting the element with the id "events-section". Then we appending our document fragment that holds all of the HTML for our events and appends it to the DOM.
            const eventsSection = document.querySelector("#events-section");
            eventsSection.appendChild(eventsFragment)
        })
    }
}