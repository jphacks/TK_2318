import React from "react";

function CalculateAllProgress(frontendTasks: any[], backendTasks: any[]) {
  const totalTasks = frontendTasks.length + backendTasks.length;
  const frontendCompletedTasks = frontendTasks.filter(
    (task) => task.check === true
  ).length;
  const backendCompletedTasks = backendTasks.filter(
    (task) => task.check === true
  ).length;

  return ((frontendCompletedTasks + backendCompletedTasks) / totalTasks) * 100;
}

interface ProgressBarProps {
  frontendTasks: any[];
  backendTasks: any[];
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  frontendTasks,
  backendTasks,
}) => {
  const progress = CalculateAllProgress(frontendTasks, backendTasks);

  return (
    <div className="w-[90%] h-[90px] flex bg-white items-center p-4 rounded-[10px] border-2 border-[#BEBEBE]">
      <div className="w-[20%] mx-2 font-bold text-[#7B7B7B] text-[13px]">
        全体進捗
      </div>
      <div className="flex w-[100%] item-center h-[14px] border border-[#BEBEBE] rounded-[10px]">
        <div
          className={`w-[${progress}] h-[13px] bg-[#6CEC79] rounded-[10px]`}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
