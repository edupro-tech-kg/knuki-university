import LibraryDescription from "../components/LibraryDescription";
import LibraryStructure from "../components/LibraryStructure";
import LibraryTeam from "../components/LibraryTeam";
import LibraryUsers from "../components/LibraryUsers";

function LibraryPage() {
  return (
    <div>
      <LibraryDescription />
      <LibraryStructure />
      <LibraryTeam />
      <LibraryUsers />
    </div>
  );
}

export default LibraryPage;
