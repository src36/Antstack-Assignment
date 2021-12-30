import React, { useContext } from "react";
import { FormContext } from "../../context";

const Contact = () => {
  const { type, setType, phone, setPhone, addConatctDetails } =
    useContext(FormContext);
  return (
    <div>
      <div className="container">
        <label>Contact Details:</label>

        <select
          onChange={(e) => setType(e.target.value)}
          value={type}
          className="select"
        >
          <option defaultValue={type}>Type</option>
          <option value="One">One</option>
          <option value="Two">Two</option>
          <option value="Three">Three</option>
          <option value="Four">Four</option>
        </select>
        <input
          type="tel"
          maxLength="10"
          style={{ width: "30%" }}
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <button className="saveBtn" onClick={() => addConatctDetails()}>
          Save
        </button>
      </div>
    </div>
  );
};

export default Contact;
