
export default {
    postNewEvent (event) {
        return fetch("http://localhost:8080/events", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(event)
        }).then(response => response.json())
    }
}