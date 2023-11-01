"use client";

import BranchDiagram from "@/components/BranchDiagram";
import ProgressBar from "@/components/ProgressBar";
import TaskInput from "@/components/TaskInput";
import TaskList from "@/components/TaskList";
import useFetchProjectData from "@/components/useFetchData";
import { TaskProps } from "./types/TaskTypes";

function HomePage() {
  const { projectData, error } = useFetchProjectData(
    "https://d0a1dfbb-d2b6-4849-8acf-05ca18b5c680.mock.pstmn.io/api/projects/1"
  );

  if (error) {
    console.error("There was a problem with the fetch operation:", error);
  }

  const frontendTasks: TaskProps[] =
    projectData?.frontend.map((task) => ({
      ...task,
      check: false,
    })) || [];

  console.log(frontendTasks);

  const backendTasks: TaskProps[] =
    projectData?.backend.map((task) => ({
      ...task,
      check: false,
    })) || [];

  return (
    <div className="grid grid-rows-[1fr,4fr] h-screen">
      <TaskInput />
      <div className="grid grid-cols-2 mx-2">
        <div className="flex flex-col items-center space-y-4">
          <ProgressBar
            frontendTasks={frontendTasks}
            backendTasks={backendTasks}
          />
          {projectData ? (
            <>
              <TaskList
                title={"フロントエンド"}
                color={"blue"}
                tasks={frontendTasks}
              />
              <TaskList
                title={"バックエンド"}
                color={"red"}
                tasks={backendTasks}
              />
            </>
          ) : (
            <p>Loading...</p>
          )}
        </div>
        <div className="flex flex-col items-center">
          <BranchDiagram />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
