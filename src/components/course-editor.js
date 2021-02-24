import React from 'react'
import '../styles/editor.style.css'

const CourseEditor = ({history}) =>
    <div>
            <div id = "lz-editor">
                <div className="row" id="lz-nav-editor">
                    <div className="col-4 nav-left-pane">
                        <div className="nav-left-pane-icon">
                            <i className="fas fa-times-circle fa-1x lz-item"
                               onClick={() => history.goBack()}></i>
                        </div>
                        <div className="nav-left-pane-text-container">
                            <div className="nav-left-pane-text mx-2 my-3"><h4>CS5610 - WebDev</h4></div>
                        </div>
                    </div>

                    <div className="nav nav-tabs col-8 nav-right-pane">
                        <div className="nav-item">
                            <a className="nav-item-link h4" href="#">
                                Build
                            </a>
                        </div>

                        <div className="nav-item">
                            <a className="nav-item-link h4" href="#">Pages</a>
                        </div>

                        <div className="nav-item">
                            <a className="nav-item-link h4" href="#">Theme</a>
                        </div>

                        <div className="nav-item">
                            <a className="nav-item-link h4" href="#">Store</a>
                        </div>

                        <div className="nav-item">
                            <a className="nav-item-link h4" href="#">Apps</a>
                        </div>

                        <div className="nav-item">
                            <a className="nav-item-link h4" href="#">Settings</a>
                        </div>

                        <div className="nav-item">
                            <a className="nav-item-link font-weight-bold" href="#"><i
                                className="fas fa-plus-circle fa-2x"></i></a>
                        </div>
                    </div>

                </div>


                <div className="row content">
                    <div className="col-4 left-pane">

                        <ul className="list-group">
                            <li className="list-group-item lz-list-group-item">
                                Module 1 -jQuery
                                <i className="fas fa-trash-alt float-right"></i>
                            </li>
                            <li className="list-group-item lz-list-group-item">
                                Module 2 -React
                                <i className="fas fa-trash-alt float-right"></i>
                            </li>
                            <li className="list-group-item lz-list-group-item">
                                Module 3 -Redux
                                <i className="fas fa-trash-alt float-right"></i>
                            </li>
                            <li className="list-group-item lz-list-group-item">
                                Module 4 -Native
                                <i className="fas fa-trash-alt float-right"></i>
                            </li>
                            <li className="list-group-item lz-list-group-item">
                                Module 5 -Angular
                                <i className="fas fa-trash-alt float-right"></i>
                            </li>
                            <li className="list-group-item lz-list-group-item">
                                Module 6 -Node
                                <i className="fas fa-trash-alt float-right"></i>
                            </li>
                            <li className="list-group-item lz-list-group-item">
                                Module 7 -Mongo
                                <i className="fas fa-trash-alt float-right"></i>
                            </li>
                            <li className="list-group-item lz-list-group-item">
                                <i className="fas fa-plus float-right"></i>
                            </li>

                        </ul>

                    </div>
                    <div className="col-8 right-pane">

                        <div className="content-right-pane-top">
                            <div className="lz-item">Topic 1</div>
                            <div className="lz-item">Topic 2</div>
                            <div className="lz-item">Topic 3</div>
                            <div className="lz-item">Topic 4</div>
                            <div className="lz-item"><i className="fas fa-plus float-right"></i></div>
                        </div>
                    </div>
                </div>
            </div>
    </div>

export default CourseEditor