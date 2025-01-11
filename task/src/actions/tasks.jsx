
import {v1 as uuid} from 'uuid';
export const getTask = () =>({
    type: "GET_TASKS", 
    tasks
})
export const addTask = ({title = '',description = '', deadline = 0, status =  ''} = {}) =>({
    type: 'ADD_TASK',
    task:{
        id:uuid(),
        title,
        description,
        deadline,
        status
    }
})

export const editTask = (id , update) =>({
    type: 'EDIT_TASK',
    id,
    update

})