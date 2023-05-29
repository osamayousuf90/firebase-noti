import React, { useState } from "react";

const EmployeTable = () => {
  const [data] = useState([
    {
      id: "1",
      title: "New Year",
      date: "01 Jan 2023",
      day: "Sunday",
      action: "",
    },
    {
      id: "2",
      title: "Labour Day",
      date: "01 May 2023",
      day: "Monday",
      action: "",
    },
    {
      id: "3",
      title: "Independance Day",
      date: "14 Aug 2023",
      day: "Tuesday",
      action: "",
    },
    {
      id: "4",
      title: "Resolution Date",
      date: "23 Mar 2023",
      day: "Wednesday",
      action: "",
    },
    {
      id: "5",
      title: "Ramadan",
      date: "20 May 2023",
      day: "Thursday",
      action: "",
    },
    { id: "6", title: "Eid", date: "13 Jun 2023", day: "Monday", action: "" },
    {
      id: "7",
      title: "Christmas",
      date: "25 Dec 2023",
      day: "Sunday",
      action: "",
    },
  ]);

  return (
    <div>
      <div className="employeeTable shadow bg-white">
        <table id="table-to-xls">
          <tbody>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Holiday Date</th>
              <th>Day</th>
              <th>Action</th>
            </tr>
            {data?.map((item, index) => (
              <tr key={index} className={index % 2 === 0 && "trbg"}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.date}</td>
                <td>{item.day}</td>
                <td>
                  <i className="fas fa-ellipsis-v"></i>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmployeTable;
