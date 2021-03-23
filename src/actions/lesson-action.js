import lessonService from "../services/lesson-service";


const createLesson = (dispatch, moduleId) => {
    lessonService.createLesson(moduleId, {title: 'New Lesson'})
        .then(lesson => dispatch({type: "CREATE_LESSON", lesson: lesson}))

}
const updateLesson = (dispatch, newItem) => {
    lessonService.updateLesson(newItem._id, newItem)
        .then(status => dispatch({type: "UPDATE_LESSON", updateLesson: newItem}))
}
const deleteLesson = (dispatch, lessonToDelete) => {
    lessonService.deleteLesson(lessonToDelete._id)
        .then(status => dispatch({type: "DELETE_LESSON", lessonToDelete: lessonToDelete}))
}
const findLessonsForModule = (dispatch, moduleId) => {
    lessonService.findLessonsForModule(moduleId)
        .then((lessons) => dispatch({
                type: "FIND_LESSONS_FOR_MODULE",
                lessons: lessons
            })
        )
}
const clearLesson = (dispatch) => {
    dispatch({
        type: "CLEAR_LESSON"
    })
}

const lessonActions = {
    createLesson, updateLesson, findLessonsForModule, deleteLesson,clearLesson
}
export default lessonActions;