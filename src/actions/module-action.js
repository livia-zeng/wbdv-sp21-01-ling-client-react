import moduleService from "../services/module-service";

const createModule = (dispatch, courseId) => {
    moduleService.createModule(courseId, {title: 'New Module'})
        .then(module => dispatch({type: "CREATE_MODULE", module: module}))

}
const updateModule = (dispatch, newItem) => {
    moduleService.updateModule(newItem._id, newItem)
        .then(status => dispatch({type: "UPDATE_MODULE", updateModule: newItem}))
}
const deleteModule = (dispatch, moduleToDelete) => {
    moduleService.deleteModule(moduleToDelete._id)
        .then(status => dispatch({type: "DELETE_MODULE", moduleToDelete: moduleToDelete}))
}
const findModulesForCourse = (dispatch, courseId) => {
    moduleService.findModulesForCourse(courseId)
        .then(modules => dispatch({
            type: "FIND_MODULES_FOR_COURSE",
            modules: modules
        }))
}

const moduleActions = {
    createModule, updateModule, findModulesForCourse, deleteModule
}
export default moduleActions;

