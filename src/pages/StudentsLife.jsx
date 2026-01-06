import React from "react";
import StudentStructure from "../components/StudentStructure";
import StudentsInfo from "../components/StudentsInfo";
import ChairmanCard from "../components/ChairmanCard";
import StudentClubs from "../components/StudentClubs";

function StudentsLife() {
  return (
    <div>
      <StudentStructure />
      <StudentsInfo />
      <ChairmanCard />
      <StudentClubs />
    </div>
  );
}

export default StudentsLife;
