import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import FirebaseComponent from './FirebaseComponent';
import Calender from './Components/Calender';
import PdfViewerComponent from './Components/PdfViewer';
import { instance, instance2 } from './utils/instance';
import NewComponent from './Components/NewComponent';

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

  return (
    <div>
      <h2>Hello this is baseUrl <br />
        {instance}
      </h2>
      <br />
      <h2>{instance2}</h2>
      <h3>This is only for dev</h3>
      <NewComponent />
      {/* <h2>{JSON.stringify(obj)}</h2> */}
      {/* <FirebaseComponent /> */}
      {/* <Calender /> */}
      {/* <PdfViewerComponent /> */}
    </div>
  );
}

export default App;
