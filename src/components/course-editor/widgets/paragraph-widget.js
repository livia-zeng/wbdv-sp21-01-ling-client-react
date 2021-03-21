import React from 'react'

const ParagraphWidget = ({widget, setEditingWidget, editing}) => {
    return(
        <>
            {
                editing &&
                <div>
                    <select onChange={(e) => setEditingWidget(widget => ({...widget, type: e.target.value}))}
                            value = {widget.type}
                            className="form-control">
                        <option value={"HEADING"}>Heading</option>
                        <option value={"PARAGRAPH"}>Paragraph</option>
                    </select>
                    <br></br>
                    <textarea
                        onChange={(e) => setEditingWidget({...widget, text: e.target.value})}
                        value={widget.text}
                        className="form-control"></textarea>
                </div>

            }
            {
                !editing &&
                <p>
                    {widget.text}
                </p>
            }
        </>
    )
}

export default ParagraphWidget