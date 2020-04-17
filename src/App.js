import React, { useReducer } from "react";
import "./App.css";
import Sidebar from "./component/Sidebar/Sidebar";
import Home from "./page/Home/Home";
import DataTable from "./page/DataTable/DataTable";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
let browserHistory = Router.browserHistory;

const DataTableReducer = (state, { type, payload }) => {
  switch (type) {
    default:
      return state;
  }
};

export const StateContext = React.createContext();
export const DispatchContext = React.createContext();

function App() {
  const [state, dispatch] = useReducer(DataTableReducer, {
    name: "123"
  });
  return (
    <DispatchContext.Provider value={dispatch}>
      <StateContext.Provider value={state}>
        <div className="App">
          <Router history={browserHistory}>
            <Sidebar />
            <div className="main">
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route path="/tables/:name">
                  <DataTable />
                </Route>
              </Switch>
            </div>
          </Router>
        </div>
      </StateContext.Provider>
    </DispatchContext.Provider>
  );
}

export default App;
