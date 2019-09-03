import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.scss";

import Landing from "./pages/Landing";

import Homepage from "./pages/Homepage";
import Footer from "./components/Footer";
import MyToys from "./pages/MyToys";

function App() {
  return (
    <Router>
      <Route path="/" exact component={Landing} />
      <Route path="/homepage/" component={Homepage} />
      <Route path="/myToys/" component={MyToys} />
    </Router>
  );
}

// function App() {
//   return (
//     <div className="App">
//       <ToyModal />
//       <MyToy/>
//      <Landing/>
//       <AddToy />
//       <UpdateUser />
//       <UpdateToy />
//       <ToyThumb/>

//     </div>
//   );
// }

export default App;
