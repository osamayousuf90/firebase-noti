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
  const handleUpdateField = (e, item) => {
    const eventValue = e?.target?.value;
    setTempName(eventValue);
    localStorage.setItem("items", JSON.stringify(data));
  };

  // final update
  const finalUpdate = (id, type) => {
    if (type === 1) {
      const findObj = data?.find((res) => res?.id === id);
      if (findObj?.name !== tempName) {
        findObj.name = tempName;
        setClickIndex(-1);
        localStorage.setItem("items", JSON.stringify(data));
        setUpdate(!update);
      }
      // console.log("findObj", findObj);
    } else {
      setClickIndex(-1);
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

      {data?.map((item, index) => {
        return (
          <div>
            {clickeIndex === index ? (
              <>
                {" "}
                <input
                  type="text"
                  onChange={(e) => handleUpdateField(e, item)}
                  defaultValue={item?.name}
                  placeholder="Update Value"
                />{" "}
                <button onClick={() => finalUpdate(item?.id, 1)}>Update</button>{" "}
                <button onClick={() => finalUpdate(item?.id, 2)}>Cancel</button>{" "}
              </>
            ) : (
              <>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <p onClick={() => setClickIndex(index)}>{item?.name}</p>{" "}
                  <button
                    onClick={() => {
                      handleDelete(item);
                    }}
                  >
                    Delete
                  </button>
                </div>
              </>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default LocalStorage;
