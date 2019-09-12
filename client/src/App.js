import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";
import Landing from "./pages/Landing";
import Navbar from "./components/Navbar";
import { UserConsumer } from "./ContextApi/UserContext";
import MainPage from "./pages/MainPage";
import ToysList from "./components/ToysList";
import { ToysContext } from "./ContextApi/ToysContext";
import Contact from "./pages/Conatct";

function App() {
  return (
    <UserConsumer>
      {({ user }) => (
        <Router>
          {user ? (
            <ToysContext.Consumer>
              {({ toys }) => (
                <>
                  <Navbar />
                  <Switch>
                    <Route path="/ToySwap" exact>
                      <MainPage data={toys} />
                    </Route>
                    <Route path="/myToys" exact component={ToysList} />
                    <Route path="/contact" exact component={Contact} />
                  </Switch>
                </>
              )}
            </ToysContext.Consumer>
          ) : (
            <Route path="/" exact component={Landing} />
          )}
        </Router>
      )}
    </UserConsumer>
  );
}

export default App;
