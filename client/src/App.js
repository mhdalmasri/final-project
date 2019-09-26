import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";
import Landing from "./pages/Landing";
import Navbar from "./components/Navbar";
import { UserConsumer } from "./ContextApi/UserContext";
import MainPage from "./pages/MainPage";
import ToysList from "./pages/ToysList";
import { ToysProvider } from "./ContextApi/ToysContext";
import Contact from "./pages/Conatct";
import NotificationsProvider from './ContextApi/NotificationsContext'
import './index.css';
import ChatPage from "./components/ChatPage";


function App() {
  return (
    <UserConsumer>
      {({users, user }) => (
        <Router>
          {user ? (
            <ToysProvider>
              <NotificationsProvider>
                <Navbar/>
                <Switch>
                  <Route path="/ToySwap" exact>
                    <MainPage />
                  </Route>
                  <Route path="/myToys" exact component={ToysList} />
                  <Route path="/contact" exact component={Contact} />
                  <Route path="/notifications" exact  >
                    <ChatPage users={users} />
                  </Route>
                </Switch>
              </NotificationsProvider>
            </ToysProvider>
          ) : (
              <Route path="/" exact component={Landing} />
            )}
        </Router>
      )}
    </UserConsumer>
  );
}

export default App;
