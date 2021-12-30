import React, { useContext } from "react";
import { FormContext } from "../../context";

const Dob = () => {
  const { date, setDate } = useContext(FormContext);
  return (
    <>
      <div className="container">
        <label>Date of Birth:</label>

        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
    </>
  );
};

export default Dob;
