import React, { useState } from "react";
import profileImg from "../Assets/JES-Admin-Portal-Assets-14.png";

const AddEmployee = ({ setModal }) => {
  const [uploadImg, setUploadImg] = useState("");

  // handle file upload
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    setUploadImg(URL.createObjectURL(file));
  };

  return (
    <div className="addEmloyee">
      <div className="addEmloyee_inner">
        <div className="addEmloyee_topHead">
          <p>Add Employee</p>
          <i
            onClick={() => setModal("")}
            class="fa-solid cross fa-circle-xmark"
          ></i>

          <div className="addEmloyee_imgWrap">
            <img src={uploadImg ? uploadImg : profileImg} alt="saleUserIcon" />
            <input type="file" onChange={(e) => handleFileUpload(e)} />
          </div>
        </div>

        <div className="addEmloyee_wrapper">
          <div className="addEmloyee_inputWrapper">
            <div>
              <label>First Name</label>
              <input type="text" placeholder="First Name" />
            </div>

            <div>
              <label>Last Name</label>
              <input type="text" placeholder="Last Name" />
            </div>
          </div>

          <div className="addEmloyee_inputWrapper">
            <div>
              <label>Username</label>
              <input type="text" placeholder="Username" />
            </div>

            <div>
              <label>Email</label>
              <input type="text" placeholder="Email" />
            </div>
          </div>

          <div className="addEmloyee_inputWrapper">
            <div>
              <label>Employee ID</label>
              <input type="text" placeholder="Employee ID" />
            </div>

            <div>
              <label>Joining Date</label>
              <input type="text" placeholder="Joining Date" />
            </div>
          </div>

          <div className="addEmloyee_inputWrapper">
            <div>
              <label>Phone</label>
              <input type="text" placeholder="Phone" />
            </div>

            <div>
              <label>Company</label>
              <input type="text" placeholder="Company" />
            </div>
          </div>

          <div className="addEmloyee_inputWrapper">
            <div>
              <label>Department</label>
              <select>
                <option disabled selected>
                  Select Department
                </option>
              </select>
            </div>

            <div>
              <label>Designation</label>
              <select>
                <option disabled selected>
                  Select Designation
                </option>
              </select>
            </div>
          </div>
        </div>

        <div className="addEmloyee_button">
          <button onClick={() => setModal("")}>Create</button>
        </div>
      </div>
    </div>
  );
};

export default AddEmployee;
