import React, {useEffect} from 'react'
import {connect} from "react-redux";
import EditableItem from "../editable-item";
import {useParams} from "react-router-dom";
import topicActions from "../../actions/topic-action";
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
        topicActions.createTopic(dispatch,lessonId)
    },
    updateTopic: (newItem) => {
        topicActions.updateTopic(dispatch,newItem)
    },
    deleteTopic: (topicToDelete) => {
        topicActions.deleteTopic(dispatch,topicToDelete)
    },
    findTopicsForLesson: (lessonId) => {
        topicActions.findTopicsForLesson(dispatch,lessonId)
    },
    clearTopics: () => {
        topicActions.clearTopics(dispatch)
    }
})

export default connect(stpm, dtpm)(TopicPills)
