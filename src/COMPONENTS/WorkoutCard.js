import legDay from "../IMAGES/leg-day.jpg";

const WorkoutCard = () => {
  return (
    <div className="bg-gray-100 overflow-hidden rounded-md shadow-md flex">
      <img
        src={legDay}
        alt="workout-cover"
        className="w-1/3 border-r-4 border-red-500 object-cover"
      />
      <div className="p-5 text-gray-700 text-xl">
        <h4 className="text-2xl relative uppercase font-bold mb-4">
          Lower Body + Shoulder
          <span className="text-red-500"> workout</span>
        </h4>
        <div className="mb-4">
          <p className="text-lg font-medium text-gray-600">
            Frequency : 3 Days per week
          </p>
          <p className="text-lg font-medium text-gray-600">
            Equipment Needed : Full Gym
          </p>
        </div>
        <div className="w-full">
          <div className="w-full border-2 border-gray-500 rounded-sm shadow-md py-1 flex h-6">
            <div className="h-full w-1/3 px-4">
              <div className="bg-gray-400 w-full h-full rounded-sm"></div>
            </div>
            <div className="h-full w-1/3 px-4">
              <div className="bg-gray-400 w-full h-full rounded-sm"></div>
            </div>
            <div className="h-full w-1/3 px-4">
              <div className="bg-gray-400 w-full h-full rounded-sm"></div>
            </div>
          </div>
          <div className="flex items-center justify-evenly text-base mt-1 font-medium text-gray-500 text-center mb-4">
            <h4 className="w-1/3">Beginner</h4>
            <h4 className="w-1/3">Intermediate</h4>
            <h4 className="w-1/3">Advanced</h4>
          </div>
          <div className="w-full flex items-center justify-between">
            <button className="uppercase font-medium bg-red-500 text-white rounded-sm px-2 shadow-md hover:text-red-500 hover:bg-transparent transition-all">
              Let's Work
            </button>
            <h5 className="font-medium text-gray-500 text-md">12 Weeks</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkoutCard;
