import React, {useEffect, useState} from 'react'
import {connect, Provider} from "react-redux";
import {useParams} from "react-router-dom";
import EditableItem from "../editable-item";
import moduleActions from "../../actions/module-action";

const ModuleList = (
    {
        modules,
        createModule,
        updateModule,
        deleteModule,
        findModulesForCourse
    }) => {
    const {layout, courseId, moduleId} = useParams();
    useEffect(() => {
        findModulesForCourse(courseId)
    }, [moduleId])
    return(<>

            <ul className="list-group">
                {
                    modules.map(module =>
                            <EditableItem
                                key = {module._id}
                                to={`/courses/${layout}/edit/${courseId}/modules/${module._id}`}
                                deleteItem={deleteModule}
                                updateItem={updateModule}
                                active={module._id === moduleId}
                                type = {'module'}
                                item={module}/>
                    )
                }

                <li className="list-group-item lz-list-group-item">
                    <i onClick={() => createModule(courseId)} className="fas fa-plus float-right"></i>
                </li>
            </ul>

    </>)}


const stpm = (state) => ({
    modules: state.moduleReducer.modules
})

const dtpm = (dispatch) => ({
    createModule: (courseId) => {
        moduleActions.createModule(dispatch,courseId)
    },
    updateModule: (newItem) => {
        moduleActions.updateModule(dispatch,newItem)
    },
    deleteModule: (moduleToDelete) => {
        moduleActions.deleteModule(dispatch,moduleToDelete)
    },
    findModulesForCourse: (courseId) => {
        moduleActions.findModulesForCourse(dispatch,courseId)
    }
})

export default connect(stpm, dtpm)(ModuleList)
