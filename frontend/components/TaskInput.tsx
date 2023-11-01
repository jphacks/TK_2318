import { useState } from "react";

function TaskInput() {
  const [showSpinner, setShowSpinner] = useState(false);

  const handleButtonClick = () => {
    setShowSpinner(true);
    setTimeout(() => {
      setShowSpinner(false);
    }, 2000);
  };

  return (
    <div className="flex justify-center items-center h-[180px]">
      <input
        type="text"
        className="border-2 p-2 mr-5 text-[12px] w-[340px] h-[55px] rounded-[15px] placeholder:text-[12px] placeholder:text-[#BEBEBE] border-[#BEBEBE]"
        placeholder="細分化したいタスクを入力してください。"
      />
      <button
        onClick={handleButtonClick}
        className="shadow-xl bg-blue-500 text-white rounded-[10px] text-[12px] h-[55px] w-[130px] font-bold"
      >
        {showSpinner ? "Loading..." : "AIで生成する"}
      </button>
    </div>
  );
}

export default TaskInput;
