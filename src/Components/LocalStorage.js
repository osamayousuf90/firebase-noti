import React, { useEffect, useState } from "react";

const LocalStorage = () => {
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [update, setUpdate] = useState(false);
  const storageValue = JSON.parse(localStorage.getItem("items"));
  const [clickeIndex, setClickIndex] = useState(false);
  const [tempName, setTempName] = useState("");

  // add
  const handleAdd = () => {
    setData([...data, { name: name, id: Date.now() }]);
    setUpdate(!update);
    setName("");
  };

  // update
  const handleUpdateField = (e) => {
    const eventValue = e?.target?.value;
    setTempName(eventValue);
    localStorage.setItem("items", JSON.stringify(data));
  };

  // final update
  const finalUpdate = (id, type) => {
    const findObj = data?.find((res) => res?.id === id);
    const oldName = findObj?.name;
    if (type === 1) {
      if (findObj?.name !== tempName) {
        findObj.name = tempName ? tempName : oldName;
        setClickIndex(-1);
        localStorage.setItem("items", JSON.stringify(data));
        setUpdate(!update);
      }
    } else if (type === 2) {
      setClickIndex(-1);
      setTempName("");
    }
  };

  // handle delete
  const handleDelete = (item) => {
    setData(data?.filter((res) => res?.id !== item?.id));
    localStorage.setItem("items", JSON.stringify(data));
    setUpdate(!update);
  };

  useEffect(() => {
    if (data) {
      localStorage.setItem("items", JSON.stringify(data));
    }
    console.log("data", data);
  }, [data]);

  useEffect(() => {
    if (storageValue) {
      setData(storageValue);
    }
    console.log(storageValue);
  }, []);

  return (
    <div>
      <div>
        <h2>Write Data</h2>
        <input
          type="text"
          name="name"
          onChange={(e) => setName(e?.target?.value)}
          placeholder="name"
          value={name}
        />
        <button onClick={handleAdd}>Add</button>
      </div>

      <br />

      <table id="customers">
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Delete</th>
        </tr>
        {data?.map((item, index) => {
          return (
            <tr>
              <td>{item?.id}</td>
              {clickeIndex === index ? (
                <>
                  <td>
                    <input
                      type="text"
                      onChange={(e) => handleUpdateField(e)}
                      defaultValue={item?.name}
                      placeholder="Update Value"
                    />{" "}
                    <button onClick={() => finalUpdate(item?.id, 1)}>
                      Update
                    </button>{" "}
                    <button onClick={() => finalUpdate(item?.id, 2)}>
                      Cancel
                    </button>{" "}
                  </td>{" "}
                </>
              ) : (
                <>
                  <td>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <p onClick={() => setClickIndex(index)}>{item?.name}</p>{" "}
                    </div>
                  </td>
                </>
              )}
              <td>
                {" "}
                <button
                  style={{ marign: "0 20px" }}
                  onClick={() => {
                    handleDelete(item);
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default LocalStorage;
