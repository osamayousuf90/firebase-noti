import "./App.scss";
import Crud from "./Components/Crud";
import Dealflow from "./Components/Dealflow";
import DragDrop from "./Components/DragDrop";
import Graphs from "./Components/Graphs";
import LocalStorage from "./Components/LocalStorage";

function App() {
  const person = { fname: "John", lname: "Doe", age: 25 };
  const person2 = { fname: "John", lname: "Doe", age: 25 };
  var test = [];
  const arr1 = [
    {
      name: "osama",
      id: 1,
    },

    {
      name: "ajay",
      id: 2,
    },
    {
      name: "ali",
      id: 3,
    },
  ];

  const arr2 = [
    {
      name: "ali",
      id: 3,
    },
    {
      name: "ajay",
      id: 2,
    },
    {
      name: "chris",
      id: 4,
    },

    {
      name: "captain",
      id: 5,
    },
    {
      name: "mukhtyar",
      id: 6,
    },
    {
      name: "osama",
      id: 1,
    },
  ];

  var rtl = "osama yousuf";
  var ans = "";
  // const check = () => {
  //   for (let x in person) {
  //     if (person["fname"] === person2["fname"]) {
  //       return true;
  //     }
  //   }
  //   return false;
  // };

  // const check = () => {
  //   for (let i = rtl.length - 1; i >= 0; i--) {
  //     ans += rtl[i];
  //   }
  //   return ans;
  // };

  // const check = () => {
  //   for (let i = 0; i < arr1?.length; i++) {
  //     for (let x = 0; x < arr2?.length; x++) {
  //       if (arr1[i].id === arr2[x].id) {
  //         test?.push(arr1[i]);
  //       }
  //     }
  //   }
  //   return test;
  // };

  // const check = (name) => {
  //   var a = name?.split(" ")?.map((res) => {
  //     return res
  //   });

  //   for (let i = 0; i < a?.length; i++) {
  //     ans += a[i][0]?.toUpperCase();
  //   }

  //   return ans;
  // };

  // console.log(check("john bills"));

  return (
    <div className="wrapper">
      {/* <Crud /> */}
      {/* <LocalStorage /> */}
      {/* <DragDrop /> */}
      {/* <Dealflow /> */}
      <Graphs />
    </div>
  );
}

export default App;
