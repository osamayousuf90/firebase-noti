import React, { useState } from "react";

const LocalStorage = () => {
  const [data, setData] = useState([
    {
      name: "osama",
      id: 1,
    },
    {
      name: "John",
      id: 2,
    },
    {
      name: "Queen",
      id: 3,
    },
    {
      name: "Steve",
      id: 4,
    },
  ]);

  return (
    <div>
      {data?.map((item) => {
        return (
          <div>
            <p>{item?.name}</p>
          </div>
        );
      })}
    </div>
  );
};

export default LocalStorage;
