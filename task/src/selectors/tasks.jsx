export default (tasks = [], { title = "", status = "Pending" } = {}) => {
    const tasksArray = Object.values(tasks);
    return tasksArray
      .filter((task) => {
        const titleMatch =
        //   task.title &&
          task.title.toLowerCase().includes(title.toLowerCase());
        return titleMatch;
      })
      .filter((task)=> {
        const statusMatch = task.status.includes(status);
        return statusMatch;
      })

  };