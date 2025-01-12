
import {v1 as uuid} from 'uuid';
export const getTask = () =>({
    type: "GET_TASKS", 
})
export const addTask = ({ title = '', description = '', deadline = 0, status = '' } = {}) => {
    const task = {
      id: uuid(),
      title,
      description,
      deadline,
      status
    };
  
    // Log the task object inside the addTask function
    console.log("Action created:", task);
  
    return {
      type: 'ADD_TASK',
      task
    };
  };
// export const addTask = ({title = '',description = '', deadline = 0, status =  ''} = {}) =>({
//     type: 'ADD_TASK',
//     task:{
//         id:uuid(),
//         title,
//         description,
//         deadline,
//         status
//     }

    
// })

export const editTask = (id , update) =>({
    type: 'EDIT_TASK',
    id,
    update

})