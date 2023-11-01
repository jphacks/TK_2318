interface TaskProps {
  taskName: string;
  branchName: string;
  date: string;
  check: boolean;
}

interface TaskListProps {
  title: string;
  color: string;
  tasks: TaskProps[];
}

function TaskItem({ taskName, branchName, date, check }: TaskProps) {
  return (
    <li className="mb-3  ">
      <div className="  rounded-[10px]  bg-white items-center flex p-2 ">
        <div className="w-[10%] justify-center  flex mr-3">
          <input
            checked={check}
            type="checkbox"
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
        </div>
        <div className="flex  items-center w-[100%] justify-between ">
          <div className="flex-col flex py-1 ">
            <div className="text-[18x] font-black ">{taskName}</div>
            <div className="w-[100%] flex">
              <div className="text-[10px] w-auto mr-2">{branchName}</div>
              <div className="text-[10px] w-auto text-[#ABABAB]">{date}</div>
            </div>
          </div>
          <div className="flex ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 mr-3 text-[#BEBEBE] hover:text-red-600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
              />
            </svg>
          </div>
        </div>
      </div>
    </li>
  );
}

function TaskList({ title, color, tasks }: TaskListProps) {
  function calculateProgress(tasks: any[]) {
    const totalTasks = tasks.length;
    const completedTasks = tasks.filter((task) => task.check === true).length;

    return (completedTasks / totalTasks) * 100;
  }
  const progress = calculateProgress(tasks);
  console.log(progress);

  return (
    <div className={`w-[90%] h-auto bg-${color}-200 rounded-[10px] `}>
      <div
        className={`h-[55px] bg-${color}-400 rounded-t-[10px] items-center flex pl-4 text-white font-black text-[20px]`}
      >
        <div>{title}</div>
      </div>
      <div className="flex">
        <div className={`h-[15px] bg-[#6CEC79] w-[${progress}%]`}></div>
        <div
          className={`h-[15px] w-[${
            100 - progress
          }%] bg-white border-x border-[#BEBEBE]`}
        ></div>
      </div>
      <ul className="p-5">
        {tasks.map((task, index) => (
          <TaskItem
            key={index}
            taskName={task.taskName}
            branchName={task.branchName}
            date={task.date}
            check={task.check}
          />
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
