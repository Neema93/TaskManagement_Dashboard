const tasksReduserDefaultState = [];

const tasks = (state = tasksReduserDefaultState, action) => {
  switch (action.type) {
    case "GET_TASKS":    
      return [...state];
    case "ADD_TASK":
      return [...state, action.task];
    case "EDIT_TASK":
      return state.map((task) => {
        if (task.id === action.id) {
          return {
            ...task,
            ...action.update,
          };
        } else {
          return task;
        }
      });
    default:
      return state;
  }
};

export default tasks;