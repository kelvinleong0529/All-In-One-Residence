import { useState } from "react";
import StudentList from "./Student/StudentList";
import useFetch from "./useFetch";

const Home = () => {
  const {
    error,
    isPending,
    data: students,
  } = useFetch("http://localhost:8000/student");

  return (
    <div className="container">
      <div className="Home">
        {error && <div>{error}</div>}
        {isPending && <div>Loading...</div>}
        {students && <StudentList students={students} />}
      </div>
    </div>
  );
};

export default Home;
