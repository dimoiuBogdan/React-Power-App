import { useParams } from "react-router-dom";

const SingleWorkoutPage = () => {
  let { id } = useParams();
  console.log("ID:", id);
  return (
    <div id="page">
      <h2 className="text-center font-semibold text-white text-4xl">{id}</h2>
    </div>
  );
};

export default SingleWorkoutPage;
