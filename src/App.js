import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import FirebaseComponent from './FirebaseComponent';
import Calender from './Components/Calender';
import PdfViewerComponent from './Components/PdfViewer';
import { instance, instance2 } from './utils/instance';
import NewComponent from './Components/NewComponent';
import LocalStorage from './Components/LocalStorage';
import ReactPdfRender from './Components/ReactPdfRender';
import AllUsers from './Components/AllUsers/AllUsers';

function App() {
  // Generate a UUID

  // let temp = null
  // const [obj, setobj] = useState({})
  // const haasas = async () => {
  //   if (!navigator.mediaDevices || !navigator.mediaDevices.enumerateDevices) {
  //     console.log("enumerateDevices() not supported.");
  //   } else {
  //     // List cameras and microphones.
  //     navigator.mediaDevices
  //       .enumerateDevices()
  //       .then((devices) => {
  //         setobj(devices)
  //         devices.forEach((device) => {
  //           console.log(`${device.kind}: ${device.label} id = ${device.deviceId}`);
  //         });
  //       })
  //       .catch((err) => {
  //         console.log(`${err.name}: ${err.message}`);
  //       });
  //   }
  // }
  // useEffect(() => {
  //   haasas()
  // }, [])

  // const mergeArray = (str1, str2) => {
  //   let length = str1?.length > str2?.length ? str1?.length : str2?.length
  //   let latest = ""
  //   for (let i = 0; i < length; i++) {
  //     let temp1 = str1[i]
  //     let temp2 = str2[i]
  //     latest = latest + (temp1 ? temp1 : "") + (temp2 ? temp2 : "")
  //   }
  //   return latest
  // };
  // let res = mergeArray("civic", "bmw");
  // console.log(res);




  // check how many times word repeated and with repeation number
  // const test = () => {
  //   var printText = {}
  //   for (let index = 0; index < text.length; index++) {
  //     var outerElem = text[index];
  //     var totalNumberText = 1
  //     var firstText = text[index]
  //     for (let index2 = 0; index2 < text.length; index2++) {
  //       if (firstText === text[index2]) {
  //         printText[outerElem] = totalNumberText++
  //       }
  //     }
  //     console.log("", printText)
  //   }

  // }


  // check fibonacci series with number ans on array
  // const test = () => {
  //   var numbers = 2
  //   var ans = []
  //   for (let index = 0; index < numbers; index++) {
  //     if (numbers > 1) {
  //       if (index === 0) {
  //         ans.push(index, index + 1)
  //       }
  //       else {
  //         if (ans?.length < numbers) {
  //           var previous = ans[index - 1]
  //           var current = ans[index]
  //           var add = previous + current
  //           ans.push(add)
  //         }
  //       }
  //     }
  //   }
  //   console.log(ans)
  // }


  // const test = () => {
  //   var numbers = [5, 4, 3, 2, 1]
  //   var ans = []
  //   for (let index = 0; index < numbers.length; index++) {
  //     var outerElem = numbers[index];
  //     var tempNum = 0
  //     if (outerElem > tempNum) {
  //       tempNum = outerElem
  //       for (let index2 = 0; index2 < array.length; index2++) {
  //         const element = array[index2];

  //       }
  //     }
  //   }
  // }



  useEffect(() => {
    // test()
  }, [])


  return (
    <>
      {/* <h2>Hello this is baseUrl <br />
        {instance}
      </h2> */}
      <br />
      {/* <h2>{instance2}</h2> */}
      {/* <h3>This is only for developement</h3> */}
      {/* <NewComponent /> */}
      {/* <h2>{JSON.stringify(obj)}</h2> */}
      {/* <FirebaseComponent /> */}
      {/* <Calender /> */}
      {/* <PdfViewerComponent /> */}
      {/* <LocalStorage /> */}
      {/* <ReactPdfRender /> */}
      <AllUsers />
    </>
  );
}

export default App;
