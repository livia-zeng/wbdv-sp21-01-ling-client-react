import React, {useState, useEffect} from "react";
import {Link, useParams} from "react-router-dom";
import quizService from "../../services/quiz-service"
const QuizzesList = () => {
    const {courseId} = useParams()
    const [quizzes, setQuizzes] = useState([])
    useEffect(() => {
        quizService.findAllQuizzes()
            .then((quizzes) => {
                setQuizzes(quizzes)
            })
    }, [])
    return(
        <div>
            <h2>Quizzes</h2>
            <ul className={"list-group"}>
                {
                    quizzes.map((quiz) => {
                        return(
                            <li className= "list-group-item">
                                <div>
                                    {quiz.title}
                                    <Link to={`/courses/${courseId}/quizzes/${quiz._id}`}>
                                        <div type="button" className="btn btn-info float-right">start</div>
                                    </Link>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    );
}

export default QuizzesList;