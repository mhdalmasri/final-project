import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";
import Landing from "./pages/Landing";
import Navbar from "./components/Navbar";
import { UserConsumer } from "./ContextApi/UserContext";
import MainPage from "./pages/MainPage";
import ToysList from "./pages/ToysList";
import Notifications from "./pages/Notifications"
import { ToysProvider } from "./ContextApi/ToysContext";
import Contact from "./pages/Conatct";
import NotificationsProvider from './ContextApi/NotificationsContext'
import './index.css';


function App() {
  return (
    <UserConsumer>
      {({ user }) => (
        <Router>
          {user ? (
            <ToysProvider>
              <NotificationsProvider>
                <Navbar />
                <Switch>
                  <Route path="/ToySwap" exact>
                    <MainPage />
                  </Route>
                  <Route path="/myToys" exact component={ToysList} />
                  <Route path="/contact" exact component={Contact} />
                  <Route path="/notifications" exact component={Notifications} />
                </Switch>
              </NotificationsProvider></ToysProvider>
          ) : (
              <Route path="/" exact component={Landing} />
            )}
        </Router>
      )}
    </UserConsumer>
  );
}

export default App;
