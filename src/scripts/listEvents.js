import API from "./eventsAPIManager"

export default {
    listAllEvents () {
        API.getAllEvents().then(eventResponse => console.log("event response", eventResponse))
    }
}