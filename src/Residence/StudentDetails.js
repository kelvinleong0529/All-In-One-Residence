import { useParams } from "react-router-dom";
import useFetch from "../useFetch";

const StudentDetails = () => {
  const { id } = useParams();
  const {
    data: student,
    isPending,
    error,
  } = useFetch("http://localhost:8000/student/" + id);

  console.log(student);

  const handleDelete = () => {
    fetch("http://localhost:8000/student" + id, {
      method: "DELETE",
    });
  };

  return (
    <div className="student-details">
      {isPending && <div> Loading... </div>}
      {error && <div>{error}</div>}
      {student && (
        <article>
          <h2>{student.name}</h2>
          <h3>{student.number}</h3>
          <h3>Major:{student.major}</h3>
          <h3>Minor:{student.minor}</h3>
          <h3>Marks:{student.marks}</h3>
          <button
            type="button"
            className="btn btn-outline-primary"
            onClick={handleDelete}
          >
            Delete
          </button>
        </article>
      )}
    </div>
  );
};

export default StudentDetails;
