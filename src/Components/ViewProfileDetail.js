import React, { useState } from "react";
import profileImg from "../Assets/JES-Admin-Portal-Assets-14.png";

const ViewProfileDetail = ({ setModal }) => {
  const [uploadImg, setUploadImg] = useState("");

  // handle file upload
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    setUploadImg(URL.createObjectURL(file));
  };

  return (
    <div className="viewProfileDetail">
      <div className="viewProfileDetail_inner">
        <div className="viewProfileDetail_topHead">
          <p>Profile Detail</p>
          <i
            onClick={() => setModal("")}
            class="fa-solid cross fa-circle-xmark"
          ></i>

          <div className="viewProfileDetail_imgWrap">
            <img
              style={{ cursor: "default" }}
              src={profileImg}
              alt="saleUserIcon"
            />
            {/* <input type="file" onChange={(e) => handleFileUpload(e)} /> */}
          </div>
        </div>

        <div className="viewProfileDetail_wrapper">
          <div className="viewProfileDetail_inputWrapper">
            <div>
              <label>First Name</label>
              <p>John</p>
            </div>

            <div>
              <label>Last Name</label>
              <p>Wick</p>
            </div>
          </div>

          <div className="viewProfileDetail_inputWrapper">
            <div>
              <label>Username</label>
              <p>John Wick</p>
            </div>

            <div>
              <label>Email</label>
              <p>John@gmail.com</p>
            </div>
          </div>

          <div className="viewProfileDetail_inputWrapper">
            <div>
              <label>Employee ID</label>
              <p>54</p>
            </div>

            <div>
              <label>Joining Date</label>
              <p>2013</p>
            </div>
          </div>

          <div className="viewProfileDetail_inputWrapper">
            <div>
              <label>Phone</label>
              <p>12345678</p>
            </div>

            <div>
              <label>Company</label>
              <p>Unknown</p>
            </div>
          </div>

          <div className="viewProfileDetail_inputWrapper">
            <div>
              <label>Department</label>
              <p>IT</p>
            </div>

            <div>
              <label>Designation</label>
              <p>Web Developer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewProfileDetail;
