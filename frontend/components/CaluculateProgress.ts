
function CalculateProgress(tasks: any[]) {
    const totalTasks = tasks.length;
    const completedTasks = tasks.filter((task) => task.check === true).length;

    return (completedTasks / totalTasks) * 100;
  }

export default CalculateProgress;
