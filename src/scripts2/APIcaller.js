const apiBaseUrl = "http://localhost:8088"


const API = {
  getOneEntry(endpoint, id) {
    return fetch(`${apiBaseUrl}/${endpoint}/${id}`).then(res => res.json());
  },
  getAll(endpoint) {
    return fetch(`${apiBaseUrl}/${endpoint}`).then(res => res.json());
  },
  postOneEntry(endpoint, entry) {
    return fetch(`${apiBaseUrl}/${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(entry)
    });
  },
  deleteEntry (endpoint, entryID ) {
    return fetch(`${apiBaseUrl}/${endpoint}/${entryID}`, {
    method: "DELETE"
  }).then(res => res.json());
}
};

export default API