export type Task = {
  taskName: string;
  branchName: string;
  date: string;
};

export type ProjectData = {
  frontend: Task[];
  backend: Task[];
};


export interface TaskProps {
  taskName: string;
  branchName: string;
  date: string;
  check: boolean;
}

export interface TaskListProps {
  title: string;
  color: string;
  tasks: TaskProps[];
}