import React, {useState, useEffect} from 'react'
import HeadingWidget from "./heading-widget";
import ParagraphWidget from "./paragraph-widget";
import {useParams} from "react-router-dom";
import widgetService from "../../../services/widget-service"

import {connect} from "react-redux";

const WidgetList = (
    {
        widgets = [],
        createWidget,
        updateWidget,
        deleteWidget,
        findWidgetsForTopic,
        clearWidgets
    }
) => {
    const {topicId} = useParams();
    const [editingWidget, setEditingWidget] = useState({})

    useEffect(() => {
        if (topicId !== "undefined" && typeof topicId !== "undefined") findWidgetsForTopic(topicId)
        else {
            clearWidgets()
        }
    }, [topicId])
    return (
        topicId !== "undefined" && typeof topicId !== "undefined" &&
        <div>
            <i onClick={() => createWidget(topicId)} className="fas fa-plus fa-2x float-right my-1"></i>
            <h2>Widget List</h2>
            <ul className="list-group">
                {
                     widgets.map(widget =>
                        <li className="list-group-item" key={widget.id}>
                            {
                                editingWidget.id === widget.id &&
                                    <>
                                        <i onClick={() => {

                                            updateWidget(editingWidget).then(
                                                // console.log(editingWidget),
                                                setEditingWidget({})
                                            )
                                            }
                                        } className="fas fa-check fa float-right mx-1"></i>
                                        <i onClick={() => deleteWidget(widget)} className="fas fa-trash fa float-right mx-1"></i>

                                    </>
                            }
                            {
                                editingWidget.id !== widget.id &&
                                <i onClick={() => setEditingWidget(widget)} className="fas fa-cog fa-2x float-right"></i>
                            }
                            <br></br>
                            {
                                widget.type === "HEADING" &&
                                <HeadingWidget
                                    editing={editingWidget.id === widget.id}
                                    setEditingWidget={setEditingWidget}
                                    widget={editingWidget.id === widget.id ? editingWidget : widget}
                                    />
                            }
                            {
                                widget.type === "PARAGRAPH" &&
                                <ParagraphWidget
                                    editing={editingWidget.id === widget.id}
                                    setEditingWidget={setEditingWidget}
                                    widget={editingWidget.id === widget.id ? editingWidget : widget}/>
                            }
                        </li>
                    )
                }
            </ul>
            {/*{JSON.stringify(widgets)}*/}
        </div>
    )
}

const stpm = (state) => ({
    widgets: state.widgetReducer.widgets
})

const dtpm = (dispatch) => ({
    createWidget: (topicId) => {
        widgetService.createWidget(topicId, {type: "HEADING", size: 1, text: "New Widget for Heading"})
            .then(widget => dispatch({type: "CREATE_WIDGET", widget: widget}))
    },

    updateWidget: async (newItem) => {
        widgetService.updateWidget(newItem.id, newItem)
            .then(status => {
                dispatch({type: "UPDATE_WIDGET", updateWidget: newItem}
                )})

    },
    deleteWidget: (widgetToDelete) => {
        widgetService.deleteWidget(widgetToDelete.id)
            .then(status => {
                dispatch({type: "DELETE_WIDGET", widgetToDelete: widgetToDelete})
            })
    },
    findWidgetsForTopic: (topicId) => {
        widgetService.findWidgetsForTopic(topicId)
            .then(widgets => dispatch({
                type: "FIND_WIDGETS_FOR_TOPIC",
                widgets: widgets
            }))
    },
    clearWidgets: () => {
        dispatch({
            type: "CLEAR_WIDGET"
        })
    }
})

export default connect(stpm, dtpm)(WidgetList)
