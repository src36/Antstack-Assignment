import React, { useContext } from "react";
import { FormContext } from "../../context";

const ViewData = () => {
  const { show, employee, onDownload } = useContext(FormContext);
  return (
    <>
      <div>
        <table>
          {show
            ? employee.map((item) => (
                <tbody key={item.id}>
                  <tr>
                    <td>ID</td>
                    <td>{item.id}</td>
                  </tr>
                  <tr>
                    <td>Name</td>
                    <td>{item.Name}</td>
                  </tr>
                  <tr>
                    <td>Designation</td>
                    <td>{item.Designation}</td>
                  </tr>
                  <tr>
                    <td style={{ verticalAlign: "baseline" }}>Contact:</td>
                    <td>
                      {item.Contact_Details.map((item) => (
                        <p key={item.type}>
                          {item.Type}-{item.Phone}
                        </p>
                      ))}
                    </td>
                  </tr>
                  <tr>
                    <td>Skills</td>
                    <td>
                      {item.Skills.map((item) => (
                        <span key={item.Skills}>{item.Skills},</span>
                      ))}
                    </td>
                  </tr>
                  <tr>
                    <td>DOB</td>
                    <td>{item.DOB}</td>
                  </tr>
                  <tr>
                    <td>
                      <br />
                      <br />
                    </td>
                  </tr>
                </tbody>
              ))
            : null}
        </table>
        <br />
        <br />
      </div>
      <div>
        {show ? (
          <button className="downloadBtn" onClick={() => onDownload()}>
            Download JSON
          </button>
        ) : null}
      </div>
    </>
  );
};

export default ViewData;
