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
  var [prac, setPrac] = useState({
    id: "1",
    name: "root",
    isFolder: true,
    items: [
      {
        id: "2",
        name: "public",
        isFolder: false,
        items: [
          {
            id: "3",
            name: "public nested 1",
            isFolder: false,
            items: [
              {
                id: "4",
                name: "index.html",
                isFolder: false,
                items: [],
              },
              {
                id: "5",
                name: "hello.html",
                isFolder: false,
                items: [],
              },
            ],
          },
          {
            id: "6",
            name: "public_nested_file",
            isFolder: false,
            items: [],
          },
        ],
      },
      {
        id: "7",
        name: "src",
        isFolder: false,
        items: [
          {
            id: "8",
            name: "App.js",
            isFolder: false,
            items: [],
          },
          {
            id: "9",
            name: "Index.js",
            isFolder: false,
            items: [],
          },
          {
            id: "10",
            name: "styles.css",
            isFolder: false,
            items: [],
          },
        ],
      },
      {
        id: "11",
        name: "package.json",
        isFolder: false,
        items: [],
      },
    ],
  });

  // handle outer folder
  const handleOutFolder = (item, index, isOpen) => {
    prac.items[index].isFolder = !isOpen;
    setUpdate(!update);
    console.log("a", item);
  };

  // haldle inner folder
  const handleInnerFolder = (item, index, isOpen) => {
    const findObj = item;
    item.isFolder = !isOpen;
    console.log("findObj", findObj);
    setUpdate(!update);
  };

  // handle func
  const handleMe = (item, type, index) => {
    const findIfIdExist = tempValue?.find((res) => res?.id === item?.id);
    const findIfTypeExist = tempValue?.find((res) => res?.type === item?.type);
    if (findIfIdExist) {
      if (findIfTypeExist?.type === type) {
        console.log("type not same");
        setTempValue(tempValue?.filter((res) => res?.id !== item?.id));
        list[index].type = type;
        findIfTypeExist.type = type;
        setUpdate(!update);
      } else {                                                       
        console.log("exist");
        list[index].type = type;
        findIfTypeExist.type = type;
        setUpdate(!update);
      }
    } else {
      console.log("pushed");
      const body = {
        ...item,
        type,
      };
      list[index].type = type;
      tempValue.push(body);
      setUpdate(!update);
    }
  };

  console.log(tempValue);

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
                      {tempValue?.some((res) =>
                        res?.type === item?.type ? "UnAdd" : "Add"
                      )}
                      {/* {item?.type === 1 ? "UnAdd" : "Add"} */}
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
        {/* {prac?.items?.map((item, index) => {
          return (
            <>
              Outer 
              <div
                onClick={() => handleOutFolder(item, index, item?.isFolder)}
                style={{
                  padding: "10px 8px",
                  background: "lightgrey",
                  margin: "5px 0px",
                  cursor: "pointer",
                }}
              >
                <p>{item?.name}</p>
              </div>

              Inner
              {item?.isFolder === true &&
                item?.items?.map((res, index) => {
                  return (
                    <>
                      <div
                        onClick={() =>
                          handleInnerFolder(res, index, res?.isFolder)
                        }
                        style={{
                          background: "yellow",
                          padding: " 5px 5px",
                          margin: "2px 40px",
                        }}
                      >
                        <p>{res?.name}</p>
                      </div>

                      Inner Inside
                      {res?.isFolder === true &&
                        res?.items?.map((item) => {
                          return (
                            <div
                              style={{
                                background: "grey",
                                padding: "2px 5px",
                                margin: "2px 100px",
                              }}
                            >
                              <p>{item?.name}</p>
                            </div>
                          );
                        })}
                    </>
                  );
                })}
            </>
          );
        })} */}
      </div>
    </div>
  );
};

export default Crud;
