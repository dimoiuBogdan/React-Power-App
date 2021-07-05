import { Link } from "react-router-dom";

const WorkoutCard = ({ suggestedWorkout, index }) => {
  const {
    image,
    title,
    frequency,
    equipmentNeeded,
    difficultyBars,
    duration,
    path,
  } = suggestedWorkout;

  return (
    <div
      className={`${
        index % 2 === 0 ? "bg-gray-100" : "bg-gray-700"
      } overflow-hidden rounded-md shadow-md flex mb-12`}
    >
      <img
        src={image}
        alt="workout-cover"
        className="w-1/3 border-r-4 border-red-500 object-cover"
      />
      <div
        className={`p-5 ${
          index % 2 === 0 ? "text-gray-700" : "text-gray-100"
        } w-2/3 text-xl`}
      >
        <h4 className="text-3xl relative uppercase font-bold mb-4">
          {title}
          <span className="text-red-400"> workout</span>
        </h4>
        <div className="mb-4">
          <p
            className={`text-lg font-medium ${
              index % 2 === 0 ? "text-gray-700" : "text-gray-100"
            } `}
          >
            Frequency : {frequency} Days per week
          </p>
          <p
            className={`text-lg font-medium ${
              index % 2 === 0 ? "text-gray-700" : "text-gray-100"
            } `}
          >
            Equipment Needed : {equipmentNeeded}
          </p>
        </div>
        <div className="w-full">
          <div className="w-full border-2 border-gray-500 rounded-sm shadow-md py-1 flex h-6 my-2">
            {difficultyBars.map((bar, i) => (
              <div key={i} className="h-full w-1/3 px-4">
                <div
                  className={`${
                    bar ? "bg-red-400" : "bg-gray-400"
                  } w-full h-full rounded-sm`}
                ></div>
              </div>
            ))}
          </div>
          <div
            className={`flex items-center justify-evenly text-base mt-1 font-medium ${
              index % 2 === 0 ? "text-gray-700" : "text-gray-100"
            } text-center mb-4`}
          >
            <h4 className="w-1/3">Beginner</h4>
            <h4 className="w-1/3">Intermediate</h4>
            <h4 className="w-1/3">Advanced</h4>
          </div>
          <div className="w-full flex items-center justify-between">
            <Link to={path}>
              <button className="uppercase font-medium py-1  bg-red-400 text-white rounded-md px-2 shadow-md hover:text-red-400 hover:bg-transparent transition-all">
                Let's Work
              </button>
            </Link>
            <h5
              className={`font-medium ${
                index % 2 === 0 ? "text-gray-700" : "text-gray-100"
              } text-md`}
            >
              {duration}{" "}
              {+duration === 1 ? "Hour" : +duration > 1 ? "Hours" : ""}
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkoutCard;
