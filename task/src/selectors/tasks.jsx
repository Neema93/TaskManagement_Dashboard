const getVisibleTasks = (tasks = [], { title = "", status = "Pending" } = {}) => {
    const tasksArray = Object.values(tasks);
    return tasksArray
      .filter((task) => {
        const titleMatch =
        //   task.title &&
          task.title.toLowerCase().includes(title.toLowerCase());
          const statusMatch = task.status.includes(status);
        return titleMatch && statusMatch;
      })
      
  };
  export default getVisibleTasks;