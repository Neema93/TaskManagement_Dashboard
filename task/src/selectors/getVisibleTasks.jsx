const getVisibleTasks = (tasks = [], { title = "", status = "" } = {}) => {
  const tasksArray = Array.isArray(tasks) ? tasks : Object.values(tasks);
  return tasksArray.filter((task) => {
    const titleMatch = task.title?.includes(title) || title === "";
    const statusMatch = task.status?.includes(status) || status === "All";
    return titleMatch && statusMatch;
  });
};

export default getVisibleTasks;