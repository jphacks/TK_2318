function ProgressBar() {
  return (
    <div className="w-[90%] h-[450px] flex bg-white items-center p-4 rounded-[10px] border-2 border-[#BEBEBE]">
      <div className="w-[20%] mx-2 font-bold text-[#7B7B7B] text-[13px]">
        全体進捗
      </div>
      <div className="h-[50%] w-[75%] rounded-[10px] border border-[#BEBEBE] bg-[#6CEC79]"></div>
    </div>
  );
}

export default ProgressBar;
