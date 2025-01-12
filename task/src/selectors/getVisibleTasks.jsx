const getVisibleTasks = (tasks = [], { title = "", status = "Pending" } = {}) => {
  // If tasks is an object, convert it into an array using Object.values
  const tasksArray = Array.isArray(tasks) ? tasks : Object.values(tasks);
  
  // Filter the tasks based on title and status
  return tasksArray.filter((task) => {
    const titleMatch = task.title?.includes(title) || title === "";
    const statusMatch = task.status?.includes(status) || status === "Pending";
    return titleMatch && statusMatch;
  });
};

export default getVisibleTasks;