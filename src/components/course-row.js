import React, {useState} from 'react'
import {Link} from "react-router-dom";
import "../styles/course-table.style.css"

const CourseRow = (
    {
        deleteCourse,
        updateCourse,
        course,
        lastModified,
        title,
        owner
    }) => {
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
        <tr>
            <td className="w-50">
                {
                    !editing &&
                    <Link to="/courses/editor">
                        {title}
                    </Link>
                }
                {
                    editing &&
                    <input
                        onChange={(event) => setNewTitle(event.target.value)}
                        value={newTitle}
                        className="form-control"/>
                }
            </td>
            <td className="w-25 d-none d-sm-table-cell">{owner}</td>
            <td className="d-none d-md-table-cell">{lastModified}</td>
            <td className="">
                {editing && <i onClick={() => deleteCourse(course)}
                               className="fas fa-trash float-right mx-1"></i>}
                {!editing &&
                <i onClick={() => setEditing(true)} className="fas fa-edit float-right mx-1"></i>}
                {editing &&
                <i onClick={() => saveTitle()} className="fas fa-check float-right mx-1"></i>}
            </td>
        </tr>
    )
}
export default CourseRow