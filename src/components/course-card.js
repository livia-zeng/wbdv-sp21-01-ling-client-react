import React, {useState} from 'react'
import {Link} from "react-router-dom";

const CourseCard = (
    {course, deleteCourse, updateCourse, title}
) => {
    const [editing, setEditing] = useState(false)
    const [newTitle, setNewTitle] = useState(title)

    const saveTitle = () => {
        setEditing(false)
        const newCourse = {
            ...course,
            title: newTitle
        }
        updateCourse(newCourse)

    }

    return (
        <div className="col-sm-6 col-md-4 col-lg-3 mt-5">
            <div className="card">
                <img src="https://www.valuecoders.com/blog/wp-content/uploads/2016/08/react.png"
                     className="card-img-top" alt="..."/>
                <div className="card-body">
                    {editing && <i onClick={() => saveTitle()} className="fas fa-check"></i>}
                    {editing && <i onClick={() => deleteCourse(course)}
                                   className="fas fa-trash float-right mx-1"></i>}
                    {!editing &&
                    <h5 className="card-title">{course.title}</h5>
                    }
                    {
                        editing &&
                        <input
                            onChange={(event) => setNewTitle(event.target.value)}
                            value={newTitle}
                            className="form-control"/>
                    }

                    <p className="card-text">Some quick example text to build on the card title and
                        make up the bulk of the card's
                        content.</p>
                    <img src={``}/>
                    <Link to={`/courses/grid/edit/${course._id}`} className="btn btn-primary">
                        {course.title}
                    </Link>
                    {!editing && <i onClick={() => setEditing(true)}
                                    className="fas fa-edit fa-2x text-danger float-right"></i>}
                </div>
            </div>
        </div>
    )
}


export default CourseCard