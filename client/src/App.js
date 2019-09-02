import React from "react";
import "./App.scss";
import UpdateUser from "./components/UpdateUser";
import AddToy from "./components/AddToy";
import ToyModal from "./components/ToyModal";
import Landing from "./pages/Landing";
import UpdateToy from "./components/UpdateToy";
import MyToy from "./components/MyToy";
import ToyThumb from "./components/ToyThumb";

function App() {
  return (
    <div className="App">
      <ToyModal />
      <MyToy/>
      <Landing />
      <AddToy />
      <UpdateUser />
      <UpdateToy />
      <ToyThumb/>
    
    </div>
  );
}

export default App;
