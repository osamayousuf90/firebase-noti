import React, { useRef, useEffect } from "react";
import profile from "../Assets/pexels-pixabay-220453.jpg";

const EmployeeCard = ({ clickIndex, setClickIndex, index, setModal }) => {
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
    <div className="employeeCard col-sm-10 col-md-10 col-lg-11">
      <i
        onClick={handleToggler}
        class="fa-solid menuIcon fa-ellipsis-vertical"
      ></i>
      {clickIndex === index && (
        <div ref={tooltipRef} className="employeeCard_toolTip shadow">
          <div onClick={() => setModal("edit")}>
            <i class="fa-solid fa-pencil"></i> Edit
          </div>

          <div onClick={() => setClickIndex(-1)}>
            <i class="fa-regular fa-trash-can"></i> Delete
          </div>
        </div>
      )}
      <img onClick={() => setModal("view")} src={profile} alt="profile" />
      <div className="employeeCard_info">
        <p className="title">Richard Miles</p>
        <p className="designation">Web Developer</p>
      </div>
    </div>
  );
};

export default EmployeeCard;
