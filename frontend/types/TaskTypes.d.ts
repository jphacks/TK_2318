export type Task = {
  タスク名: string;
  ブランチ名: string;
  期限: string;
};

export type ProjectData = {
  frontend: Task[];
  backend: Task[];
};