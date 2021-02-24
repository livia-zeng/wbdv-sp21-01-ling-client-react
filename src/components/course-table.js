import React from 'react'
import CourseRow from "./course-row";
import Navigation from "./course-manager-nav";
import '../styles/course-table.style.css'

export default class CourseTable
    extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>

                <Navigation
                    addCourse={this.props.addCourse}
                    courses={this.props.courses}
                    isTable={true}
                />

                <table className="table">
                    <tr style={{height: 100}}/>
                    <tbody>
                    {
                        this.props.courses.map((course) =>
                            <CourseRow
                                updateCourse={this.props.updateCourse}
                                deleteCourse={this.props.deleteCourse}
                                key={course._id}
                                course={course}
                                title={course.title}
                                owner={course.owner}
                                lastModified={course.lastModified}
                            />)
                    }
                    </tbody>
                </table>
            </div>
        )
    }
}