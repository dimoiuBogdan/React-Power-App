import { useState } from "react";
import WorkoutCard from "../COMPONENTS/WorkoutCard";

const WorkoutsPage = () => {
  const [suggestedWorkouts] = useState([
    {
      image: "push-day.jpg",
      title: "Chest & Triceps",
      frequency: "2",
      equipmentNeeded: "Full Gym",
      difficultyBars: [false, true, true],
      duration: "1",
      path: "push-day",
    },
    {
      image: "pull-day.jpg",
      title: "back & biceps",
      frequency: "2",
      equipmentNeeded: "Full Gym",
      difficultyBars: [false, true, true],
      duration: "1",
      path: "pull-day",
    },
    {
      image: "leg-day.jpg",
      title: "legs & shoulders",
      frequency: "2",
      equipmentNeeded: "Full Gym",
      difficultyBars: [false, true, true],
      duration: "1",
      path: "leg-day",
    },
    {
      image: "upper-day.jpg",
      title: "Upper Body",
      frequency: "2",
      equipmentNeeded: "Full Gym",
      difficultyBars: [true, true, false],
      duration: "1",
      path: "upper-day",
    },
    {
      image: "lower-day.jpg",
      title: "lower body",
      frequency: "2",
      equipmentNeeded: "Full Gym",
      difficultyBars: [true, true, false],
      duration: "1",
      path: "lower-day",
    },
    {
      image: "full-day.jpg",
      title: "full body",
      frequency: "3",
      equipmentNeeded: "Full Gym",
      difficultyBars: [true, false, false],
      duration: "1.5",
      path: "full-day",
    },
  ]);

  return (
    <div id="page">
      <div className="w-full text-white">
        <div className="mb-16">
          <h2 className="text-4xl font-medium text-center mt-16">
            SUGGESTED <span className="text-red-400">PROGRAMS</span>
          </h2>
          <h3 className="text-2xl text-center mt-3 font-medium text-gray-300">
            Grow Big, Grow Strong
          </h3>
        </div>
        {suggestedWorkouts.map((suggestedWorkout, index) => (
          <WorkoutCard
            key={suggestedWorkout.title}
            suggestedWorkout={suggestedWorkout}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default WorkoutsPage;
