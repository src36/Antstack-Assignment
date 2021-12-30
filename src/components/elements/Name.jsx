import React, { useContext } from "react";
import { FormContext } from "../../context";

const Name = () => {
  const { name, setName } = useContext(FormContext);
  return (
    <>
      <div className="container">
        <label>Name:</label>

        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
    </>
  );
};

export default Name;
