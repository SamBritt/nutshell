const apiBaseUrl = "http://localhost:8088"


const API = {
  getOne(endpoint, id) {
    return fetch(`${apiBaseUrl}/${endpoint}/${id}`).then(res => res.json());
  },
  getAll(endpoint) {
    return fetch(`${apiBaseUrl}/${endpoint}`).then(res => res.json());
  },
  postOne(endpoint, entry) {
    return fetch(`${apiBaseUrl}/${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(entry)
    });
  }
};

export default API