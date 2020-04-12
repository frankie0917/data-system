import React from "react";
import "./App.css";
import Sidebar from "./component/Sidebar/Sidebar";
import Home from './page/Home/Home'
import DataTable from './page/DataTable/DataTable'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Sidebar />
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/tables/:name">
            <DataTable/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
