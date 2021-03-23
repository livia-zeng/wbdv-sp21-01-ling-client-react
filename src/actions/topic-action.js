import topicService from "../services/topic-service";

const createTopic= (dispatch,lessonId) => {
    topicService.createTopic(lessonId, {title: 'New Topic'})
        .then(topic => dispatch({type: "CREATE_TOPIC", topic: topic}))

}
const updateTopic= (dispatch,newItem) => {
    topicService.updateTopic(newItem._id, newItem)
        .then(status => dispatch({type: "UPDATE_TOPIC", updateTopic: newItem}))
}
const deleteTopic= (dispatch,topicToDelete) => {
    topicService.deleteTopic(topicToDelete._id)
        .then(status => dispatch({type: "DELETE_TOPIC", topicToDelete: topicToDelete}))
}
const findTopicsForLesson= (dispatch,lessonId) => {
    topicService.findTopicsForLesson(lessonId)
        .then(topics => dispatch({
            type: "FIND_TOPICS_FOR_LESSON",
            topics: topics
        }))
}
const clearTopics= (dispatch) => {
    dispatch({
        type: "CLEAR_TOPIC"
    })
}

const topicActions = {
    updateTopic, deleteTopic, findTopicsForLesson, clearTopics,createTopic
}
export default topicActions;

