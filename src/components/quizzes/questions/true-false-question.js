import React, {useState} from "react";

const TrueFalseQuestion = ({question,gradeStatus}) => {
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
                    gradeStatus && question.correct === question.answer &&
                    <i className="fas fa-check text-success mx-2"></i>
                }
                {
                    gradeStatus && question.answer.length !== 0 && question.correct !== question.answer &&
                    <i className="fas fa-times text-danger mx-2"></i>
                }
            </h5>

            <ul className={"list-group"}>
                {
                    choices.map((choice)=> {
                        return (
                            <li className={`list-group-item
                            ${gradeStatus && choice.value === question.correct  ? 'list-group-item-success' : 'list-group-item'}
                            ${gradeStatus && choice.value === question.answer &&  question.answer !== question.correct ? 'list-group-item-danger' : 'list-group-item'}
                            `}>
                                <label><input onClick={() => {
                                                setYourAnswer(choice.value)
                                                question.answer = choice.value
                                                // console.log(question.answer)
                                                }}
                                              type="radio"
                                             // checked={question.answer === choice.value}
                                              name={question._id}/> {choice.value === "true" ? "True" : "False"}</label>

                                {
                                    gradeStatus && choice.value === question.correct &&
                                    <i className="fas fa-check float-right"></i>
                                }

                                {
                                    gradeStatus && choice.value === question.answer &&  question.answer !== question.correct &&
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

        </div>
    )
}

export default TrueFalseQuestion