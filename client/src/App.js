import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.scss";
import UpdateUser from "./components/UpdateUser";
import AddToy from "./components/AddToy";
import ToyModal from "./components/ToyModal";
//import Landing from "./pages/Landing";

//import Homepage from "./pages/Homepage";
//import Footer from './components/Footer'
//import MyToys from "./pages/MyToys";

//function App() {
 // return (
 //   <Router>
//       <Route path="/" exact component={Landing} />
 //       <Route path="/homepage/" component={Homepage} />
 //       <Route path="/myToys/" component={MyToys} />
  //  </Router>

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
