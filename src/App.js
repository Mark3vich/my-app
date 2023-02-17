import "./App.css";
import React from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Profile from "./components/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Nav />
        <div className="app-wrapper-content">
          <Routes>
            <Route
              path="/dialogs"
              element={
                <Dialogs
                  dialogs={props.state.massagesPage.dialogs}
                  messages={props.state.massagesPage.messages}
                />
              }
            />
            <Route
              path="/profile"
              element={
                <Profile
                  profilePage={props.state.profilePage}
                  dispatchEvent={props.dispatchEvent}
                />
              }
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
