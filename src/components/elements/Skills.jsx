import React, { useContext } from "react";
import { FormContext } from "../../context";

const Skills = () => {
  const { skills, setSkills, addSkill } = useContext(FormContext);
  return (
    <>
      <div className="container">
        <label>Skills:</label>

        <input
          type="text"
          value={skills}
          onChange={(e) => setSkills(e.target.value)}
        />
        <button className="saveBtn" onClick={() => addSkill()}>
          Save
        </button>
      </div>
    </>
  );
};

export default Skills;
