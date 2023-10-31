import { fetch } from 'react-fetch';
import { ProjectData } from '../types/TaskTypes.d.ts';

function ProjectTasks() {
  const res = fetch('https://d0a1dfbb-d2b6-4849-8acf-05ca18b5c680.mock.pstmn.io/api/projects/1');
  const projectData: ProjectData = res.json();

  return (
    <div>
      <h2>フロントエンドタスク</h2>
      {projectData.frontend.map((task, index) => (
        <div key={index}>
          <h3>{task.タスク名}</h3>
          <p>ブランチ名: {task.ブランチ名}</p>
          <p>期限: {task.期限}</p>
        </div>
      ))}

      <h2>バックエンドタスク</h2>
      {projectData.backend.map((task, index) => (
        <div key={index}>
          <h3>{task.タスク名}</h3>
          <p>ブランチ名: {task.ブランチ名}</p>
          <p>期限: {task.期限}</p>
        </div>
      ))}
    </div>
  );
}

export default ProjectTasks;