import React from 'react'


const ParagraphWidget = ({widget, setEditingWidget, editing}) => {
    return(
        <>
            {
                editing &&
                <div>
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