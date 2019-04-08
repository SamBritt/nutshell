import API from "./eventsAPIManager"
import build from "./constructors"

export default {
    listAllEvents () {
        API.getAllEvents().then(eventResponse => console.log("event response", eventResponse))
        const eventsFragment = document.createDocumentFragment();

        eventsResponse.forEach((event, indexNumber) => {
            const eventHTML = event.build.

        })


    }
}