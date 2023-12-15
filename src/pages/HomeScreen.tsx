const HomeScreen = () => {
  return (
    <div className="w-full">
      <div className="grid w-full lg:grid-cols-3 gap-2 grid-cols-2 ">
        <div className="bg-blue-500 border text-white rounded-md p-4">
          start
        </div>
        <div className="h-[250px] bg-blue-500 border text-white rounded-md p-4">
          start
        </div>
        <div
          className="border text-white rounded-md 
      col-span-3 lg:col-span-1 grid gap-2  
      "
        >
          <div className="bg-pink-500 p-4 rounded-md">start1</div>
          <div className="bg-pink-500 p-4 rounded-md">start1</div>
        </div>
      </div>

      <div className="mt-8 w-full grid grid-flow-row  grid-cols-1 md:grid-cols-5  gap-2 text-white">
        <div className="bg-green-500 p-4 border rounded-md col-span-3">
          starting
        </div>
        <div className=" bg-purple-500 col-span-2 p-4 border rounded-md">
          starting side
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
