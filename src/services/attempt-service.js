// const QUIZ_URL = "http://localhost:3001/api/quizzes"
const QUIZ_URL = "https://radiant-anchorage-18574.herokuapp.com/api/quizzes"

const findAttemptsForQuiz = (qid) => {
    return fetch(`${QUIZ_URL}/${qid}/attempts`)
        .then(response => response.json());
}

const api = {
    findAttemptsForQuiz
}

export default api;