import React, { useEffect, useRef } from "react";
import profile from "../Assets/JES-Admin-Portal-Assets-14.png";

const ProjectCard = ({ setClickIndex, clickIndex, index }) => {
  const tooltipRef = useRef();

  //  handle toggler
  const handleToggler = () => {
    setClickIndex(index);
  };

  useEffect(() => {
    // Function to handle clicks outside the tooltip
    const handleClickOutside = (event) => {
      if (tooltipRef.current && !tooltipRef.current.contains(event.target)) {
        setClickIndex(false);
      }
    };

    // Attach the event listener
    document.addEventListener("mousedown", handleClickOutside);

    // Clean up the event listener on unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="projectCard  col-sm-10 col-md-10 col-lg-11">
      <div className="projectCard_top">
        <p className="head">Office Management</p>

        <p className="para">1 open tasks, 9 tasks completed</p>
        <div onClick={handleToggler} className="projectCard_menu">
          <i class="fa-solid  fa-ellipsis-vertical"></i>
        </div>

        {clickIndex === index && (
          <div ref={tooltipRef} className="projectCard_toolTip shadow">
            <div>
              <i class="fa-solid fa-pencil"></i> Edit
            </div>

            <div>
              <i class="fa-regular fa-trash-can"></i> Delete
            </div>
          </div>
        )}
      </div>

      <div className="projectCard_description">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
          mollitia odio vitae amet, expedita vel veniam voluptatum temporibus
          nihil ab praesentium ea explicabo provident, hic saepe asperiores,
          illum sapiente quis?
        </p>
      </div>

      <div className="projectCard_deadline">
        <p className="head">Deadline :</p>
        <p className="date">17 Apr 2019</p>
      </div>

      <div className="projectCard_projectLeader">
        <p className="head">Project Leader :</p>
        <div className="wrapper">
          <img src={profile} alt="profile" />
        </div>
      </div>

      <div className="projectCard_team">
        <p className="head">Team :</p>
        <div className="wrapper">
          {[1, 2, 3, 4]?.map((item) => {
            return <img src={profile} alt="profile" />;
          })}
        </div>
      </div>

      <div className="projectCard_progress">
        <div className="wrapper">
          <p>Progress</p>
          <p className="percentage">100%</p>
        </div>
      </div>

      <div class="projectCard_progressBar">
        <div
          class=" progress-bar bg-success"
          style={{ height: "5px", width: "100%" }}
        >
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
