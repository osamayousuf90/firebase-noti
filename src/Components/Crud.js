import React, { useState } from "react";

const Crud = () => {
  const [list, setList] = useState([
    {
      id: 1,
      name: "osama",
      type: 0,
    },
    {
      id: 2,
      name: "john",
      type: 0,
    },
    {
      id: 3,
      name: "chris",
      type: 0,
    },
  ]);
  const [tempValue, setTempValue] = useState([]);
  const [update, setUpdate] = useState(false);

  // handle func
  const handleMe = (item, type, index) => {
    const findIfIdExist = tempValue?.find((res) => res?.id === item?.id);
    if (findIfIdExist) {
      setTempValue(tempValue?.filter((res) => res?.id !== item?.id));
      list[index].type = type;
      setUpdate(!update);
    } else {
      const findIfTypeExist = tempValue?.find(
        (res) => res?.type === item?.type
      );
      if (findIfTypeExist) {
        console.log("findIfTypeExist", findIfTypeExist);
      } else {
        const body = {
          ...item,
          type,
        };
        list[index].type = type;
        tempValue.push(body);
        setUpdate(!update);
      }
    }
  };

  console.log("tempValue", tempValue);

  // const checkIfExistById = tempValue?.find((res) => res?.id === item?.id);
  // const checkIfTypeSame = tempValue?.some((res) => res?.type === type);
  // console.log("checkIfTypeSame" ,checkIfTypeSame)
  // list[index].type = type;
  // setUpdate(!update);
  // if (checkIfExistById) {
  //   setTempValue(tempValue?.filter((res) => res?.id !== item?.id));
  //   setUpdate(!update);
  //   list[index].type = 0;
  // } else if (checkIfTypeSame) {
  //   console.log("checkIfTypeSame", checkIfTypeSame);
  // } else {
  //   console.log("item not exist");
  //   const itemNotExistBody = {
  //     ...item,
  //     type,
  //   };
  //   tempValue.push(itemNotExistBody);
  //   setUpdate(!update);
  // }

  return (
    <div>
      <div class="container mt-3">
        <h2>CRUD</h2>
        <p>Prac</p>
        <table class="table table-striped">
          <thead>
            <tr>
              <th>Actions</th>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {list?.map((item, index) => {
              return (
                <tr>
                  <td>
                    {" "}
                    <button onClick={() => handleMe(item, 1, index)}>
                      {" "}
                      {item?.type === 1 ? "UnAdd" : "Add"}
                    </button>{" "}
                    <button onClick={() => handleMe(item, 2, index)}>
                      {item?.type === 2 ? "Untrash" : "Trash"}
                    </button>{" "}
                    <button onClick={() => handleMe(item, 3, index)}>
                      {item?.type === 3 ? "UnView" : "View"}
                    </button>{" "}
                  </td>
                  <td>{item?.name}</td>
                  <td>john@example.com</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Crud;
