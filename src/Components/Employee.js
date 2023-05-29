import React, { useState } from "react";
import fakeData from "../fakeData";
import EmployeeCard from "./EmployeeCard";
import AddEmployee from "./AddEmployee";
import EditEmployee from "./EditEmployee";
import EmployeTable from "./EmployeTable";
import ViewProfileDetail from "./ViewProfileDetail";

const Employee = () => {
  const [clickIndex, setClickIndex] = useState(-1);
  const [modal, setModal] = useState("");
  const [select, setSelect] = useState(1);

  return (
    <div className="employee">
      {modal === "create" && <AddEmployee setModal={setModal} />}
      {modal === "edit" && <EditEmployee setModal={setModal} />}
      {modal === "view" && <ViewProfileDetail setModal={setModal} />}
      <div className="employee_topBar">
        <div className="left">
          <p className="head">Employee</p>
          <div></div>
        </div>

        <div className="right">
          <button onClick={() => setSelect(1)}>
            <i
              className={
                select === 1
                  ? "fa-solid fa-table-cells active"
                  : "fa-solid fa-table-cells"
              }
            ></i>
          </button>

          <button onClick={() => setSelect(2)}>
            <i
              className={
                select === 2 ? "fa-solid fa-bars active" : "fa-solid fa-bars"
              }
            ></i>
          </button>

          <button onClick={() => setModal("create")} className="addEmployee">
            <i class="fa-solid fa-plus"></i> Add Employee
          </button>
        </div>
      </div>

      <div className="employee_searchBar">
        <div>
          <input type="text" placeholder="Employee ID" />
        </div>

        <div>
          <input type="text" placeholder="Employee Name" />
        </div>

        <div className="selectWrap">
          <select>
            <option selected disabled>
              Select Designation
            </option>
            <option>Web Developer</option>
            <option>Android Developer</option>
            <option>Graphic Designer</option>
          </select>
        </div>

        <div className="searchBtn">
          <button>Search</button>
        </div>
      </div>

      {select === 1 && (
        <div className="employee_cardsBar row">
          {fakeData?.map((item, index) => {
            return (
              <EmployeeCard
                setModal={setModal}
                clickIndex={clickIndex}
                setClickIndex={setClickIndex}
                index={index}
              />
            );
          })}
        </div>
      )}

      {select === 2 && <EmployeTable />}
    </div>
  );
};

export default Employee;
