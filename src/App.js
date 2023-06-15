import "./App.scss";
import Crud from "./Components/Crud";
import DragDrop from "./Components/DragDrop";
import LocalStorage from "./Components/LocalStorage";

function App() {
  return (
    <div className="wrapper">
      {/* <Crud /> */}
      {/* <LocalStorage /> */}
      <DragDrop />
    </div>
  );
}

export default App;
