export default {
    postNewEvent(event) {
        return fetch("http://localhost:8088/events", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(event)
        })
    },
    getAllEvents() {
        return fetch("http://localhost:8088/events").then(response => response.json())

    },
    editEvents() {
        return fetch("http://localhost:8088/events", {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(entry)
        })
    }
}