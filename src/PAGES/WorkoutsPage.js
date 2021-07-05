import { useState } from "react";
import WorkoutCard from "../COMPONENTS/WorkoutCard";
import firebase from "firebase/app";
import "firebase/firestore";
import { useEffect } from "react";

const WorkoutsPage = () => {
  const [suggestedWorkouts, setSuggestedWorkouts] = useState([]);
  const db = firebase.firestore();

  const getWorkoutsFromFirestore = () => {
    db.collection("suggestedWorkouts")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          setSuggestedWorkouts((prevWorkouts) => {
            return [...prevWorkouts, doc.data()];
          });
        });
      });
  };

  useEffect(() => {
    if (suggestedWorkouts.length === 0) getWorkoutsFromFirestore();
  }, []);

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
