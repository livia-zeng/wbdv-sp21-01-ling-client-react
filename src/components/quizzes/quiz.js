import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom"
import Question from "./questions/question";
import questionService from "../../services/question-service"
import quizService from "../../services/quiz-service"
const Quiz = () => {
    const {quizId} = useParams()
    const [questions, setQuestions] = useState([])
    const [quiz, setQuiz] = useState([])
    useEffect(() => {
        quizService.findQuizById(quizId)
            .then((quiz) => {
                setQuiz(quiz)
            })
        questionService.findQuestionsForQuiz(quizId)
            .then((questions) => {
                setQuestions(questions)
            })
    }, [])

    return(
        <div>
            <h3>{quiz.title} </h3>
            <ul className={"list-group"}>
                {
                    questions.map((question) => {
                        return(
                            <li className={"list-group-item my-3 border-top"}>
                                <Question question={question}/>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Quiz;