import React, {useEffect} from 'react'
import {connect} from "react-redux";
import EditableItem from "../editable-item";
import {useParams} from "react-router-dom";
import "../../styles/editor.style.css"
import lessonActions from "../../actions/lesson-action";
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
        lessonActions.createLesson(dispatch,moduleId)
    },
    updateLesson: (newItem) => {
        lessonActions.updateLesson(dispatch,newItem)
    },
    deleteLesson: (lessonToDelete) => {
        lessonActions.deleteLesson(dispatch,lessonToDelete)
    },
    findLessonsForModule: (moduleId) => {
        lessonActions.findLessonsForModule(dispatch,moduleId)
    },
    clearLesson: () => {
        lessonActions.clearLesson(dispatch)
    }
})


export default connect(stpm, dtpm)(LessonTabs)
