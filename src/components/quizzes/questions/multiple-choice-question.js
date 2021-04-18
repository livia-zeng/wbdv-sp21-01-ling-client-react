import React, {useState} from "react";

const MultipleChoiceQuestion = ({question,gradeStatus}) => {
    const [yourAnswer, setYourAnswer] = useState("")

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
            <ul className="list-group">
                {
                    question.choices.map((choice) => {
                        return(
                            <li className={`list-group-item
                            ${gradeStatus && choice === question.correct  ? 'list-group-item-success' : 'list-group-item'}
                            ${gradeStatus && choice === question.answer &&  question.answer !== question.correct ? 'list-group-item-danger' : 'list-group-item'}
                            `}>
                                <label><input
                                    onClick={() => {
                                         setYourAnswer(choice)
                                        question.answer = choice
                                        console.log(question.answer)
                                    }}
                                    type="radio"
                                    name={question._id}/> {choice}</label>
                                {
                                    gradeStatus && choice === question.correct &&
                                    <i className="fas fa-check float-right"></i>
                                }

                                {
                                    gradeStatus && choice === question.answer &&  question.answer !== question.correct &&
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

export default MultipleChoiceQuestion