import widgetService from "../services/widget-service";

const createWidget= (dispatch,topicId) => {
    widgetService.createWidget(topicId, {type: "HEADING", size: 1, text: "New Widget for Heading"})
        .then(widget => dispatch({type: "CREATE_WIDGET", widget: widget}))
}

const updateWidget= async (dispatch,newItem) => {
    widgetService.updateWidget(newItem.id, newItem)
        .then(status => {
            dispatch({type: "UPDATE_WIDGET", updateWidget: newItem}
            )})

}
const deleteWidget= (dispatch,widgetToDelete) => {
    widgetService.deleteWidget(widgetToDelete.id)
        .then(status => {
            dispatch({type: "DELETE_WIDGET", widgetToDelete: widgetToDelete})
        })
}
const findWidgetsForTopic= (dispatch,topicId) => {
    widgetService.findWidgetsForTopic(topicId)
        .then(widgets => dispatch({
            type: "FIND_WIDGETS_FOR_TOPIC",
            widgets: widgets
        }))
}
const clearWidgets= (dispatch) => {
    dispatch({
        type: "CLEAR_WIDGET"
    })
}

const widgetActions = {
    clearWidgets,findWidgetsForTopic,deleteWidget,updateWidget,createWidget
}

export default widgetActions

