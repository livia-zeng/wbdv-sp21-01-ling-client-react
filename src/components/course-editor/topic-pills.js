import React, {useEffect} from 'react'
import {connect} from "react-redux";
import EditableItem from "../editable-item";
import {useParams} from "react-router-dom";
import topicService from "../../services/topic-service"

const TopicPills = (
    {
        topics = [],
        createTopic,
        updateTopic,
        deleteTopic,
        findTopicsForLesson,
        clearTopics
    }) => {
    const {layout, courseId, moduleId, lessonId, topicId} = useParams();
    useEffect(() => {
        if (moduleId !== "undefined" && typeof moduleId !== "undefined" &&
            lessonId !== "undefined" && typeof lessonId !== "undefined") {
            findTopicsForLesson(lessonId)
        } else {
            clearTopics();
        }
    }, [moduleId, lessonId])
    return (
        <>
            {
                topics.map(topic =>
                    <EditableItem
                        key = {topic._id}
                        to={`/courses/${layout}/edit/${courseId}/modules/${moduleId}/lessons/${lessonId}/topics/${topic._id}`}
                        deleteItem={deleteTopic}
                        updateItem={updateTopic}
                        active={topicId === topic._id}
                        type={'topic'}
                        item={topic}/>
                )
            }
            <div className="lz-item"><i className="fas fa-plus float-right"
                                        onClick={() => createTopic(lessonId)}></i></div>
        </>
    )
}

const stpm = (state) => ({
    topics: state.topicReducer.topics
})

const dtpm = (dispatch) => ({
    createTopic: (lessonId) => {
        topicService.createTopic(lessonId, {title: 'New Topic'})
            .then(topic => dispatch({type: "CREATE_TOPIC", topic: topic}))

    },
    updateTopic: (newItem) => {
        topicService.updateTopic(newItem._id, newItem)
            .then(status => dispatch({type: "UPDATE_TOPIC", updateTopic: newItem}))
    },
    deleteTopic: (topicToDelete) => {
        topicService.deleteTopic(topicToDelete._id)
            .then(status => dispatch({type: "DELETE_TOPIC", topicToDelete: topicToDelete}))
    },
    findTopicsForLesson: (lessonId) => {
        topicService.findTopicsForLesson(lessonId)
            .then(topics => dispatch({
                type: "FIND_TOPICS_FOR_LESSON",
                topics: topics
            }))
    },
    clearTopics: () => {
        dispatch({
            type: "CLEAR_TOPIC"
        })
    }
})

export default connect(stpm, dtpm)(TopicPills)
