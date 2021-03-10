import React, {useEffect} from 'react'
import {connect} from "react-redux";
import EditableItem from "../editable-item";
import {useParams} from "react-router-dom";
import lessonService from '../../services/lesson-service'
import "../../styles/editor.style.css"
const LessonTabs = (
    {
        lessons=[],
        createLesson,
        updateLesson,
        deleteLesson,
        findLessonsForModule,
        clearLesson
    }) => {
    const {layout, courseId, moduleId, lessonId} = useParams();
    useEffect(() => {
        if(moduleId !== "undefined" && typeof moduleId !== "undefined") {
            findLessonsForModule(moduleId)
        } else {
            clearLesson();
        }
    }, [moduleId])

    return(<>
            {
                lessons.map(lesson =>
                            <EditableItem
                                    key = {lesson._id}
                                    to={`/courses/${layout}/edit/${courseId}/modules/${moduleId}/lessons/${lesson._id}`}
                                    active = {lesson._id === lessonId}
                                    deleteItem={deleteLesson}
                                    updateItem={updateLesson}
                                    type = {'lesson'}
                                    item={lesson}/>
                )
            }
                    <div className="nav-item">
                        <a className="nav-item-link font-weight-bold" href="#">
                            <i className="fas fa-plus-circle fa-2x" onClick={() => createLesson(moduleId)}></i></a>
                    </div>
    </>
    )}


const stpm = (state) => ({
    lessons: state.lessonReducer.lessons
})

const dtpm = (dispatch) => ({
    createLesson: (moduleId) => {
        lessonService.createLesson(moduleId, {title: 'New Lesson'})
            .then(lesson => dispatch({type: "CREATE_LESSON", lesson: lesson}))

    },
    updateLesson: (newItem) => {
        lessonService.updateLesson(newItem._id, newItem)
            .then(status => dispatch({type: "UPDATE_LESSON", updateLesson: newItem}))
    },
    deleteLesson: (lessonToDelete) => {
        lessonService.deleteLesson(lessonToDelete._id)
            .then(status => dispatch({type: "DELETE_LESSON", lessonToDelete: lessonToDelete}))
    },
    findLessonsForModule: (moduleId) => {
        lessonService.findLessonsForModule(moduleId)
            .then((lessons) => dispatch({
                type: "FIND_LESSONS_FOR_MODULE",
                lessons: lessons
            })
            )
    },
    clearLesson: () => {
        dispatch({
            type: "CLEAR_LESSON"
        })
    }
})


export default connect(stpm, dtpm)(LessonTabs)
