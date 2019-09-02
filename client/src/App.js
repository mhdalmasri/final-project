import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.scss";

import Landing from "./pages/Landing";
import Homepage from "./pages/Homepage";
import Footer from './components/Footer'
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

export default App;
