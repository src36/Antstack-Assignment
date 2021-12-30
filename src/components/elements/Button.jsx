import React, { useContext } from "react";
import { FormContext } from "../../context";

const Button = () => {
  const { addEmployee, setNum, setShow, num } = useContext(FormContext);
  return (
    <>
      <div>
        <button
          className="addBtn"
          onClick={() => {
            addEmployee();
            setNum(num + 1);
          }}
        >
          Add Employee
        </button>
      </div>
      <div>
        <button className="button-1" onClick={() => setShow(true)}>
          View Data
        </button>
        <button className="button-2" onClick={() => setShow(false)}>
          Hide Data
        </button>
      </div>
    </>
  );
};

export default Button;
