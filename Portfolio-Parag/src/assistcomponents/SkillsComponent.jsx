import React from "react";

function SkillsComponent({ skillLogoName, skillName }) {
  return (
    <div className="border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300">
      <img src={skillLogoName} alt="" className="w-10 rounded-full" />
      <span className="font-semibold">{skillName}</span>
    </div>
  );
}

export default SkillsComponent;
