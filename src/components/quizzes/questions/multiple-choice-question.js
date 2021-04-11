import React, {useState} from "react";

const MultipleChoiceQuestion = ({question}) => {
    const [yourAnswer, setYourAnswer] = useState("")
    const [gradeStatus,beginGrade] = useState(false)

    return(
        <div>
            <h5>
                {question.question}
                {
                    gradeStatus && question.correct === yourAnswer &&
                    <i className="fas fa-check text-success mx-2"></i>
                }
                {
                    gradeStatus && yourAnswer.length !== 0 && question.correct !== yourAnswer &&
                    <i className="fas fa-times text-danger mx-2"></i>
                }
            </h5>
            <ul className="list-group">
                {
                    question.choices.map((choice) => {
                        return(
                            <li className={`list-group-item
                            ${gradeStatus && choice === question.correct  ? 'list-group-item-success' : 'list-group-item'}
                            ${gradeStatus && choice === yourAnswer &&  yourAnswer !== question.correct ? 'list-group-item-danger' : 'list-group-item'}
                            `}>
                                <label><input
                                    onClick={() => {
                                        setYourAnswer(choice)
                                    }}
                                    type="radio"
                                    checked={choice === yourAnswer}
                                    name={question._id}/> {choice}</label>
                                {
                                    gradeStatus && choice === question.correct &&
                                    <i className="fas fa-check float-right"></i>
                                }

                                {
                                    gradeStatus && choice === yourAnswer &&  yourAnswer !== question.correct &&
                                    <i className="fas fa-times float-right"></i>
                                }
                            </li>
                        )
                    })
                }
            </ul>
            <p>
                Your answer: {yourAnswer}
            </p>

            <div type="button" className="btn btn-success" onClick={() => {
                beginGrade(true)
            }}>Grade</div>

            <div type="button" className="btn btn-primary mx-3" onClick={() => {
                beginGrade(false)
                setYourAnswer("")
            }}>Reset</div>
        </div>
    )
}

export default MultipleChoiceQuestion