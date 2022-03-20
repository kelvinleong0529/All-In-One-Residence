import { useState } from "react";
import StudentList from "../Student/StudentList";
import useFetch from "../useFetch";
import "../Components/HeroSection";
import HeroSection from "../Components/HeroSection";
import "../App.css";
import Cards from "../Components/Cards";
import Footer from "../Components/Footer";

const Home = () => {
  const {
    error,
    isPending,
    data: students,
  } = useFetch("http://localhost:8000/student");

  return (
    <>
      <HeroSection />
      <Cards></Cards>
      <div className="container">
        {/* <div className="Home">
          {error && <div>{error}</div>}
          {isPending && <div>Loading...</div>}
          {students && <StudentList students={students} />}
        </div> */}
      </div>
      <Footer />
    </>
  );
};

export default Home;
