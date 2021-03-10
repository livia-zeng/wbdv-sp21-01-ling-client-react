import React, {useEffect, useState} from 'react'
import {connect, Provider} from "react-redux";
import {useParams} from "react-router-dom";
import EditableItem from "../editable-item";
import moduleService from "../../services/module-service"


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
        moduleService.createModule(courseId, {title: 'New Module'})
            .then(module => dispatch({type: "CREATE_MODULE", module: module}))

    },
    updateModule: (newItem) => {
        moduleService.updateModule(newItem._id, newItem)
            .then(status => dispatch({type: "UPDATE_MODULE", updateModule: newItem}))
    },
    deleteModule: (moduleToDelete) => {
        moduleService.deleteModule(moduleToDelete._id)
            .then(status => dispatch({type: "DELETE_MODULE", moduleToDelete: moduleToDelete}))
    },
    findModulesForCourse: (courseId) => {
        moduleService.findModulesForCourse(courseId)
            .then(modules => dispatch({
                type: "FIND_MODULES_FOR_COURSE",
                modules: modules
            }))
    }
})

export default connect(stpm, dtpm)(ModuleList)
