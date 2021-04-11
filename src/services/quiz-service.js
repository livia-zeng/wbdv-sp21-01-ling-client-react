// const QUIZ_URL = "http://localhost:4000/api/quizzes"
const QUIZ_URL = "https://radiant-anchorage-18574.herokuapp.com/api/quizzes"


export const findAllQuizzes = () => {
    return fetch(`${QUIZ_URL}`)
        .then(response => response.json());
}

export const findQuizById = (qid) => {
    return fetch(`${QUIZ_URL}/${qid}`)
        .then(response => response.json());
}

const api = {
    findAllQuizzes,findQuizById
}

export default api;

