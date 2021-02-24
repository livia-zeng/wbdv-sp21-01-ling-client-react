import React from 'react'
import CourseCard from "./course-card";
import {Link} from "react-router-dom";
import Navigation from "./course-manager-nav";

const CourseGrid = ({courses, deleteCourse, updateCourse, addCourse}) =>
    <div>
        <Navigation
            addCourse={addCourse}
            courses={courses}
            isTable={false}
        />
        <Link to="/courses/table">
            <i className="fas fa-list fa-2x float-right"></i>
        </Link>
        <h2>Course Grid {courses.length}</h2>
        <div className="row">
            {
                courses.map(course =>
                    <CourseCard course={course} key={course._id} deleteCourse={deleteCourse}
                                updateCourse={updateCourse} title={course.title}/>
                )
            }
        </div>
    </div>

export default CourseGrid