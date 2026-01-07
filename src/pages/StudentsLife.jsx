import StudentStructure from "../components/StudentStructure";
import StudentsInfo from "../components/StudentsInfo";
import ChairmanCard from "../components/ChairmanCard";
import StudentClubs from "../components/StudentClubs";
import Scholars from "../components/Scolars";

function StudentsLife() {
  return (
    <div>
      <StudentStructure />
      <StudentsInfo />
      <Scholars />
      <ChairmanCard />
      <StudentClubs />
    </div>
  );
}

export default StudentsLife;