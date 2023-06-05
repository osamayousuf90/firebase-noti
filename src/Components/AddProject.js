import React, { useState } from "react";
import profileImg from "../Assets/JES-Admin-Portal-Assets-14.png";

const AddProject = ({ setModal }) => {
  const [uploadImg, setUploadImg] = useState("");

  // handle file upload
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    setUploadImg(URL.createObjectURL(file));
  };

  return (
    <div className="addProject">
      <div className="addProject_inner">
        <div className="addProject_topHead">
          <p>Create Project</p>
          <i
            onClick={() => setModal("")}
            class="fa-solid cross fa-circle-xmark"
          ></i>
        </div>

        <div className="addProject_wrapper">
          <div className="addProject_inputWrapper">
            <div>
              <label>Project Name</label>
              <input type="text" placeholder="Project Name" />
            </div>

            <div>
              <label>Client</label>
              <input type="text" placeholder="Client" />
            </div>
          </div>

          <div className="addProject_inputWrapper">
            <div>
              <label>Start Date</label>
              <input type="date" placeholder="Start Date" />
            </div>

            <div>
              <label>End Date</label>
              <input type="date" placeholder="End Date" />
            </div>
          </div>

          <div className="addProject_inputWrapperFull">
            <div>
              <label>Priority</label>
              <select>
                <option>Low</option>
                <option>Normal</option>
                <option>High</option>
                <option>Extreme</option>
              </select>
            </div>
          </div>

          <div className="addProject_inputWrapper">
            <div>
              <label>Add Project Leader</label>
              <input type="text" placeholder="Add Project Leader" />
            </div>

            <div className="addProject_teamList">
              <p>Team Leader</p>
              <div>
                <img src={profileImg} alt="profileImg" />
              </div>
            </div>
          </div>

          <div className="addProject_inputWrapper">
            <div>
              <label>Add Team</label>
              <input type="text" placeholder="Add Team" />
            </div>

            <div className="addProject_teamList">
              <p>Team Members</p>
              <div>
                {[1, 2, 3, 4]?.map((Item) => {
                  return <img src={profileImg} alt="profileImg" />;
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="addProject_inputWrapperFull">
          <div>
            <label>Description</label>
          </div>
        </div>
        <div className="addProject_description">
          <textarea placeholder="Description"> </textarea>
        </div>

        <div className="addProject_button">
          <button onClick={() => setModal("")}>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default AddProject;
