import React from "react";
import Name from "./elements/Name";
import Designation from "./elements/Designation";
import Contact from "./elements/Contact";
import Skills from "./elements/Skills";
import Dob from "./elements/Dob";
import Button from "./elements/Button";
import ViewData from "./elements/ViewData";

const Element = () => {
  return (
    <>
      <div className="header">
        <h3>Employee Data</h3>
      </div>
      <div className="component">
        <Name />
        <Designation />
        <Contact />
        <Skills />
        <Dob />
        <Button />
        <ViewData />
      </div>
    </>
  );
};

export default Element;
