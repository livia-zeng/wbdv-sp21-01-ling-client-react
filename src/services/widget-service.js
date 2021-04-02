const WIDGET_URL = process.env.REACT_APP_WIDGET_URL
const URL = "https://boiling-lowlands-22513.herokuapp.com/api";

export const createWidget = (tid, widget) =>
    //http://localhost:8080/api/topics/${tid}/widgets
    fetch(`${WIDGET_URL}/topics/${tid}/widgets`, {
        method: "POST",
        body: JSON.stringify(widget),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())


export const findWidgetsForTopic = (topicId) =>
    //http://localhost:8080/api/topics/${topicId}/widgets
    fetch(`${WIDGET_URL}/topics/${topicId}/widgets`)
        .then(response => response.json())


export const updateWidget = (wid, widget) => {
    console.log(widget);
    //http://localhost:8080/api/widgets/${wid}
     return fetch(`${WIDGET_URL}/widgets/${wid}`, {
        method: "PUT",
        body: JSON.stringify(widget),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json());
}

export const deleteWidget = (wid) => {
    //http://localhost:8080/api/widgets/${wid}
    return fetch(`${WIDGET_URL}/widgets/${wid}`, {
        method: 'DELETE'
    }).then(response => response.json());
}

const api = {
    createWidget, findWidgetsForTopic, deleteWidget, updateWidget
}

export default api;


