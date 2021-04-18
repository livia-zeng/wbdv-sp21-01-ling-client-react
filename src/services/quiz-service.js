 //const QUIZ_URL = "http://localhost:3001/api/quizzes"
const QUIZ_URL = "https://radiant-anchorage-18574.herokuapp.com/api/quizzes"

 const findAllQuizzes = () => {
    return fetch(`${QUIZ_URL}`)
        .then(response => response.json());
}

 const findQuizById = (qid) => {
    return fetch(`${QUIZ_URL}/${qid}`)
        .then(response => response.json());
}

const submitQuiz = (quizId, questions) => {
     return fetch(`${QUIZ_URL}/${quizId}/attempts`, {
         method: 'POST',
         body: JSON.stringify(questions),
         headers: {
             'content-type': 'application/json'
         }
     }).then(response => response.json())
 }

const api = {
    findAllQuizzes,findQuizById,submitQuiz
}

export default api;

