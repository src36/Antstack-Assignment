import React, { createContext, useState, useEffect } from "react";
import Element from "./components/Element";
const FormContext = createContext(null);

const FormProvider = ({ Children }) => {
  const [name, setName] = useState("");
  const [designation, setDesignation] = useState("");
  const [skills, setSkills] = useState("");
  const [date, setDate] = useState("");
  const [type, setType] = useState("");
  const [phone, setPhone] = useState("");
  const [num, setNum] = useState(1);
  const [employee, setEmployee] = useState([]);
  const [contactDetils, setContactDetails] = useState([]);
  const [allSkills, setAllSkills] = useState([]);
  const [show, setShow] = useState(false);

  const addConatctDetails = () => {
    const allContacts = {
      Type: type,
      Phone: phone,
    };
    setContactDetails([...contactDetils, allContacts]);
  };

  const addSkill = () => {
    const allSkillsDetails = {
      Skills: skills,
    };
    setAllSkills([...allSkills, allSkillsDetails]);
  };

  const addEmployee = () => {
    const allInputData = {
      id: `Employee#${num}`,
      Name: name,
      Designation: designation,
      Contact_Details: contactDetils,
      Skills: allSkills,
      DOB: date,
    };
    setEmployee([...employee, allInputData]);
    console.log(employee);
    setName("");
    setDesignation("");
    setSkills("");
    setDate("");
    setPhone("");
    setType("");
  };
  useEffect(() => {
    console.log(employee);
  }, [employee, contactDetils, allSkills]);

  function download(content, fileName, contentType) {
    const a = document.createElement("a");
    const file = new Blob([content], { type: contentType });
    a.href = URL.createObjectURL(file);
    a.download = fileName;
    a.click();
  }

  const onDownload = () => {
    download(JSON.stringify(employee), "Employee-Data.json", "text/plain");
  };

  return (
    <FormContext.Provider
      value={{
        name,
        setName,
        designation,
        setDesignation,
        type,
        setType,
        phone,
        setPhone,
        addConatctDetails,
        skills,
        setSkills,
        addSkill,
        date,
        setDate,
        addEmployee,
        num,
        setNum,
        show,
        setShow,
        onDownload,
        employee,
      }}
    >
      <Element />
    </FormContext.Provider>
  );
};

export { FormContext, FormProvider };
