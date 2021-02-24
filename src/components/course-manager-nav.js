import React from 'react'
import '../styles/course-manager-nav.style.css'
import {Link} from "react-router-dom";

const {useState} = React;

const Navigation = ({addCourse, isTable}) => {

    const [value, setValue] = useState('');
    const handleChange = (e) => {
        setValue(e.target.value);
    }

    const addTitle = () => {
        const newCourse = {
            owner: "Me",
            lastModified: "Never",
            title: value
        }
        addCourse(newCourse)
        setValue('');
    }

    return (
        <div>
        <div className="lz-nav lz-bg-light border-bottom">
            <div className="row bg-primary py-1">
                <div className="col-1 col-sm-2">
                    <span className="d-inline-block float-left p-1 m-1 text-white">
                        <i className="fa fa-bars fa-1x"></i>
                    </span>
                    <div
                        className="d-none d-sm-block navbar-brand p-1 md-1 text-white font-weight-bold">Course
                        Manager
                    </div>
                </div>
                <div className="col-9 col-sm-8 py-1">
                    <input className="form-control font-italic font-weight-bold"
                           onChange={handleChange}
                           value={value}
                           placeholder="New Course"/>
                </div>

                <div className="col-2 col-sm-2 py-1">
                    <a href="#"><i className="fa fa-plus-circle fa-2x text-danger"
                                   onClick={addTitle}></i></a>
                </div>
            </div>

            <table className="table mb-0">
                <thead>
                <tr>
                    {
                        isTable &&
                        <th scope="col" className="w-50 pl-4">Title</th>
                    }
                    {
                        !isTable &&
                        <th scope="col" className="w-50 pl-4">Recent Document</th>
                    }

                    <th scope="col" className="w-25 d-none d-sm-table-cell">Owned by</th>
                    {
                        isTable &&
                        <th scope="col" className="pl-0 d-none d-md-table-cell">Last modified</th>
                    }

                    <th scope="col">
                        <span className="mr-2">
                        <Link to="/courses/grid">
                            <i className="fa fa-th text-dark"></i>
                        </Link>
                    </span>

                        <span className="">
                            <i className="fas fa-sort-alpha-up-alt text-dark"></i>
                    </span>

                        <span className="ml-2">
                        <Link to="/courses/table">
                            <i className="fas fa-list text-dark"></i>
                        </Link>
                    </span>
                    </th>
                </tr>
                </thead>
            </table>
        </div>
            <div>
                <a href="#" className="myButton mr-1">
                    <i className="fas fa-plus-circle fa-3x text-danger"
                       onClick={addTitle}></i>
                </a>
            </div>
        </div>
    )
}

export default Navigation


