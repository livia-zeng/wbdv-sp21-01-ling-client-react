import React, {useEffect, useState} from 'react'
import {Link, useParams, useHistory} from "react-router-dom";
import moduleReducer from "../../reducers/module-reducer";
import lessonReducer from "../../reducers/lesson-reducer";
import topicReducer from "../../reducers/topic-reducer"
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import ModuleList from "./module-list";
import LessonTabs from "./lesson-tabs";
import TopicPills from "./topic-pills";
import courseService from "../../services/course-service"
import "../../styles/editor.style.css"

const reducer = combineReducers({
    moduleReducer: moduleReducer,
    lessonReducer: lessonReducer,
    topicReducer : topicReducer
})

const store = createStore(reducer)

const CourseEditor = ({history, params}) => {
    const {layout, courseId, moduleId} = useParams();
    const [title, setTitle] = useState("Selected Course")
    useEffect(() => {
        courseService.findCourseById(courseId).then(course => setTitle(course.title))
    }, [])
    return (
        <Provider store={store}>
        <div>
            <div id="lz-editor">
                <div className="row" id="lz-nav-editor">
                    <div className="col-4 nav-left-pane">
                        <div className="nav-left-pane-icon">

                            <Link className="fas fa-times-circle fa-1x lz-item"
                                  to = {`/courses/${layout}`}
                               ></Link>
                        </div>
                        <div className="nav-left-pane-text-container">
                            <div className="nav-left-pane-text mx-2 my-3"><h4>{title}</h4>
                            </div>
                        </div>
                    </div>

                    <div className="nav nav-tabs col-8 nav-right-pane">
                        <LessonTabs/>

                    </div>

                </div>

                <div className="row content">

                    <div className="col-4 left-pane">
                        <ModuleList/>

                    </div>
                    <div className="col-8 right-pane">

                        <div className="content-right-pane-top">
                            <TopicPills/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </Provider>
    )
}

export default CourseEditor