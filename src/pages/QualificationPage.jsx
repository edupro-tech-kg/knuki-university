import React from "react";
import QualificationDescription from "../components/QualificationDescription";
import Goal from "../components/Goal";
import Target from "../components/Target";
import QualificationFunction from "../components/QualificationFunction";

function QualificationPage() {
  return (
    <div>
      <QualificationDescription />
      <Goal />
      <Target />
      <QualificationFunction />
    </div>
  );
}

export default QualificationPage;
