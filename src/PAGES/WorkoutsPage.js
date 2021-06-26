import { useState } from "react";
import WorkoutCard from "../COMPONENTS/WorkoutCard";

const WorkoutsPage = () => {
  const [state, setstate] = useState(initialState);

  return (
    <div id="page">
      <div className="w-full text-white">
        <div className="mb-16">
          <h2 className="text-4xl font-medium text-center mt-16">
            SUGGESTED <span className="text-red-500">PROGRAMS</span>
          </h2>
          <h3 className="text-2xl text-center mt-3 font-medium text-gray-300">
            Grow Big, Grow Strong
          </h3>
        </div>
        <WorkoutCard />
      </div>
    </div>
  );
};

export default WorkoutsPage;
