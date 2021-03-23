import React from 'react'
import HeadingWidget from "./heading-widget";
import ParagraphWidget from "./paragraph-widget";

const Widget = ({widget, setEditingWidget, editing}) => {

    return (
        <>
            {
                widget.type === "HEADING" &&
                <HeadingWidget
                    editing={editing}
                    setEditingWidget={setEditingWidget}
                    widget={widget}
                />
            }

            {
                widget.type === "PARAGRAPH" &&
                <ParagraphWidget
                    editing={editing}
                    setEditingWidget={setEditingWidget}
                    widget={widget}/>
            }
        </>

    )


}

export default Widget;