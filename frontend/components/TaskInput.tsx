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
    <div className="justify-center items-center flex h-[200px]">
      <div className="flex flex-col h-auto">
        <div className="flex justify-center items-center h-auto">
          <input
            type="text"
            className="border-2 p-2 text-[12px] w-[340px] h-[55px] rounded-[15px] placeholder:text-[12px] placeholder:text-[#BEBEBE] border-[#BEBEBE]"
            placeholder="細分化したいタスクを入力してください。"
          />
        </div>
        <div className="flex justify-between  mt-3 w-[100%] ">
          <div>
            <div className="  relative max-w-sm">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                </svg>
              </div>
              <input
                type="date"
                className="bg-white border border-gray-300 text-gray-900 text-[11px] rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Select date"
              />
            </div>
          </div>
          <div className="flex items-center justify-center mx-2">~</div>
          <div>
            <div className="  relative max-w-sm">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                </svg>
              </div>
              <input
                type="date"
                className="bg- border border-gray-300 text-gray-900 text-[10px] rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Select date"
              />
            </div>
          </div>
        </div>
      </div>
      <button
        onClick={handleButtonClick}
        className="ml-5 shadow-xl bg-blue-500 text-white rounded-[10px] text-[11px] h-[55px] w-[130px] font-bold"
      >
        {showSpinner ? "Loading..." : "AIで生成する"}
      </button>
    </div>
  );
}

export default TaskInput;
