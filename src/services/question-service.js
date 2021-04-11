// const QUIZ_URL = "http://localhost:4000/api/quizzes"
const QUIZ_URL = "https://radiant-anchorage-18574.herokuapp.com/api/quizzes"
// const QUESTION_URL = "http://localhost:4000/api/questions"
const QUESTION_URL = "https://radiant-anchorage-18574.herokuapp.com/api/questions"

export const findAllQuestions = () => {
    return fetch(`${QUESTION_URL}`)
        .then(response => response.json());
}


export const findQuestionsForQuiz = (quizId) => {
    return  fetch(`${QUIZ_URL}/${quizId}/questions`)
        .then(response => response.json())
}


const api = {
    findAllQuestions,findQuestionsForQuiz
}

export default api;