import React, { useContext } from "react";
import { FormContext } from "../../context";

const Designation = () => {
  const { designation, setDesignation } = useContext(FormContext);
  return (
    <>
      <div className="container">
        <label>Designation:</label>

        <input
          type="text"
          value={designation}
          onChange={(e) => setDesignation(e.target.value)}
        />
      </div>
    </>
  );
};

export default Designation;
