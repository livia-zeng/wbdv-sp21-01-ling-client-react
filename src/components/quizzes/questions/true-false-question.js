import React, {useState} from "react";

const TrueFalseQuestion = ({question}) => {
    const [gradeStatus,beginGrade] = useState(false)
    const [yourAnswer, setYourAnswer] = useState("")
    const choices = [
        {
            key : 1,
            value : "true"
        },
        {
            key : 2,
            value : "false"
        }
    ]
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

            <ul className={"list-group"}>
                {
                    choices.map((choice)=> {
                        return (
                            <li className={`list-group-item
                            ${gradeStatus && choice.value === question.correct  ? 'list-group-item-success' : 'list-group-item'}
                            ${gradeStatus && choice.value === yourAnswer &&  yourAnswer !== question.correct ? 'list-group-item-danger' : 'list-group-item'}
                            `}>
                                <label><input onClick={() => {
                                                    setYourAnswer(choice.value)
                                                }}
                                              type="radio"
                                              checked={yourAnswer === choice.value}
                                              name={question._id}/> {choice.value === "true" ? "True" : "False"}</label>

                                {
                                    gradeStatus && choice.value === question.correct &&
                                    <i className="fas fa-check float-right"></i>
                                }

                                {
                                    gradeStatus && choice.value === yourAnswer &&  yourAnswer !== question.correct &&
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

export default TrueFalseQuestion