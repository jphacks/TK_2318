function HomePage() {
  return (
    <div className="grid grid-rows-[1fr,4fr] h-screen">
      <div className="flex justify-center items-center h-[180px]">
        <input
          type="text"
          className="border-2 p-2 mr-5  w-[340px] h-[55px] rounded-[15px] placeholder:text-[12px] placeholder:text-[#BEBEBE]  border-[#BEBEBE] "
          placeholder="細分化したいタスクを入力してください。"
        />
        <button className="bg-blue-500 text-white  rounded-[10px] text-[12px] h-[55px] w-[130px] font-bold ">
          AIで生成する
        </button>
      </div>
      <div className=" grid grid-cols-2 mx-2">
        <div className="flex flex-col  items-center space-y-4">
          <div className="w-[90%] h-[9%] flex bg-white items-center p-4 rounded-[10px] border-2 border-[#BEBEBE] ">
            <div className="w-[20%] mx-2 font-bold text-[#7B7B7B]">
              全体進捗
            </div>
            <div className="h-[50%] w-[75%] rounded-[10px] border-5  border-[#BEBEBE]   bg-green-200"></div>
          </div>
          <div className="w-[90%] h-auto  ">
            <div className=" h-[55px] bg-blue-400 rounded-t-[10px] items-center flex pl-4 text-white font-black text-[20px]">
              フロントエンド
            </div>
            <div className=" h-[15px] bg-[#6CEC79] border-x-1 border-[#BEBEBE]  "></div>
            <div className="  bg-blue-200 rounded-b-[10px]">
              <ul className="p-5 ">
                <li className="mb-3  ">
                  <div className="  rounded-[10px]  bg-white items-center flex  p-2 ">
                    <div className="w-[10%] justify-center  flex mr-3">
                      <div className="border-2 h-5 w-5 rounded-[5px]"></div>
                    </div>
                    <div className="flex-col flex py-1">
                      <div className="text-[18px] font-bold ">
                        UIデザインの作成
                      </div>
                      <div className="w-[100%] flex">
                        <div className="text-[10px] w-auto mr-2">
                          feature/ui-design
                        </div>
                        <div className="text-[10px] w-auto text-[#ABABAB]">
                          10月10日(月)
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="">
                  <div className="items-center flex  p-2 bg-white mb-3 rounded-[10px] ">
                    <div className="w-[10%] justify-center  flex mr-3">
                      <div className="border-2 h-5 w-5 rounded-[5px]"></div>
                    </div>
                    <div className="flex-col flex py-1">
                      <div className="text-[18px] font-bold ">
                        UIデザインの作成
                      </div>
                      <div className="w-[100%] flex">
                        <div className="text-[10px] w-auto mr-2">
                          feature/ui-design
                        </div>
                        <div className="text-[10px] w-auto text-[#ABABAB]">
                          10月10日(月)
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-[90%] h-auto  ">
            <div className=" h-[55px]   bg-red-400 rounded-t-[10px] items-center flex pl-4 text-white font-black text-[20px]">
              フロントエンド
            </div>
            <div className=" h-[15px] bg-[#6CEC79] border-x-1 border-[#BEBEBE]  "></div>
            <div className="  bg-red-200 rounded-b-[10px]">
              <ul className="p-5 ">
                <li className="mb-3  ">
                  <div className="  rounded-[10px]  bg-white items-center flex  p-2 ">
                    <div className="w-[10%] justify-center  flex mr-3">
                      <div className="border-2 h-5 w-5 rounded-[5px]"></div>
                    </div>
                    <div className="flex-col flex py-1">
                      <div className="text-[18px] font-bold ">
                        UIデザインの作成
                      </div>
                      <div className="w-[100%] flex">
                        <div className="text-[10px] w-auto mr-2">
                          feature/ui-design
                        </div>
                        <div className="text-[10px] w-auto text-[#ABABAB]">
                          10月10日(月)
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="">
                  <div className="items-center flex  p-2 bg-white mb-3 rounded-[10px] ">
                    <div className="w-[10%] justify-center  flex mr-3">
                      <div className="border-2 h-5 w-5 rounded-[5px]"></div>
                    </div>
                    <div className="flex-col flex py-1">
                      <div className="text-[18px] font-bold ">
                        UIデザインの作成
                      </div>
                      <div className="w-[100%] flex">
                        <div className="text-[10px] w-auto mr-2">
                          feature/ui-design
                        </div>
                        <div className="text-[10px] w-auto text-[#ABABAB]">
                          10月10日(月)
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className=" flex flex-col  items-center">
          <div className=" border-2 h-[80%] w-[90%] border-[#BEBEBE] rounded-[10px]"></div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
