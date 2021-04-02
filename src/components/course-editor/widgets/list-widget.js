import React from 'react'


const ListWidget = ({widget, setEditingWidget,editing}) => {
    return(
        <div>
            {
                editing &&
                <>
                    <input checked ={widget.ordered === "on"}
                           onChange={(e) => {
                               setEditingWidget(widget => ({...widget, ordered: widget.ordered === "on" ? "off" : "on"}))
                           }}
                           type="checkbox"/> Ordered
                    <br/>
                    Item list
                    <textarea value={widget.text}
                              onChange={(e) => setEditingWidget(widget => ({...widget, text: e.target.value}))}
                              rows={10} className="form-control"></textarea>
                </>
            }
            {
                !editing &&
                <>
                    {
                        widget.ordered === "on" &&
                        <ol>
                            {
                                widget.text.split("\n").map((item) => {
                                    return(
                                        <li key={item.id}>
                                            {item}
                                        </li>
                                    )
                                })
                            }
                        </ol>
                    }
                    {
                        widget.ordered !== "on" &&
                        <ul>
                            {
                                widget.text.split("\n").map((item) => {
                                    return(
                                        <li key={item.id}>
                                            {item}
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    }
                </>
            }
        </div>
    )
}

export default ListWidget