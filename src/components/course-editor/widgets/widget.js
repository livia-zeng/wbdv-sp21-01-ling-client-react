import React from 'react'
import HeadingWidget from "./heading-widget";
import ParagraphWidget from "./paragraph-widget";
import ImageWidget from "./image-widget";
import ListWidget from "./list-widget";

const Widget = ({widget, setEditingWidget, editing}) => {

    return (
        <>
            {
                editing &&
                    <div className={"my-2"}>
                        <select onChange={(e) => setEditingWidget(widget => ({...widget, type: e.target.value}))}
                                value = {widget.type}
                                className="form-control">
                            <option value={"HEADING"}>Heading</option>
                            <option value={"PARAGRAPH"}>Paragraph</option>
                            <option value={"LIST"}>List</option>
                            <option value={"IMAGE"}>Image</option>
                        </select>
                    </div>

            }

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

            {
                widget.type === "IMAGE" &&
                <ImageWidget
                    editing={editing}
                    setEditingWidget={setEditingWidget}
                    widget={widget}
                />
            }
            {
                widget.type === "LIST" &&
                <ListWidget
                    editing={editing}
                    setEditingWidget={setEditingWidget}
                    widget={widget}
                />
            }
        </>

    )


}

export default Widget;