import React from 'react'
import {Link, Route, Redirect} from "react-router-dom";
import CourseTable from "./course-table";
import CourseGrid from "./course-grid";
import CourseEditor from "./course-editor";
import courseService from "../services/course-service";


class CourseManager extends React.Component {
    state = {
        courses: [],
    }

    componentDidMount = () => {
        courseService.findAllCourses()
            .then(courses => this.setState({courses}))
    }

    addCourse = (course) => {
        courseService.createCourse(course)
            .then(course => this.setState(
                (prevState) => ({
                    ...prevState,
                    courses: [
                        ...prevState.courses,
                        course
                    ]
                })))
    }

    deleteCourse = (courseToDelete) => {
        courseService.deleteCourse(courseToDelete._id)
            .then(status => {
                this.setState((prevState) => ({
                    ...prevState,
                    courses: prevState.courses.filter
                    (course => course !== courseToDelete)
                }))
            })
    }

    updateCourse = (course) => {
        courseService.updateCourse(course._id, course)
            .then(status => this.setState((prevState) => ({
                ...prevState,
                courses: prevState.courses.map(
                    (c) => c._id === course._id ? course : c)
            })))
    }

    getCourseById = (courseId) => {
        courseService.findCourseById(courseId)
                .then(course => console.log(course))
    }

    render() {
        return (
            <div>
                <Route path={['/courses/table']}>
                    <CourseTable
                        addCourse={this.addCourse}
                        updateCourse={this.updateCourse}
                        deleteCourse={this.deleteCourse}
                        courses={this.state.courses}/>
                </Route>
                <Route path="/courses/grid">
                    <CourseGrid
                        addCourse={this.addCourse}
                        deleteCourse={this.deleteCourse}
                        updateCourse={this.updateCourse}
                        courses={this.state.courses}/>
                </Route>

                <Route path="/courses/editor"
                       render={(props) => <CourseEditor {...props}/>}>
                </Route>

                <Route exact path="/courses">
                    <Redirect to="/courses/table"/>
                </Route>

                <Link to="/">
                    <a className="float-right font-italic initialism">Back to Home</a>
                    {/*<i className="fas fa-2x fa-home float-right" ></i>*/}
                </Link>

            </div>
        )
    }
}

export default CourseManager