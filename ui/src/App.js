import React, { Component } from "react";
import {  BrowserRouter as Router , Route, Switch } from 'react-router-dom'
import Students from "./components/Students";
import Competencies from "./components/Competencies";
import NotFound from "./components/NotFound";
import CompetencyPage from "./components/CompetencyPage";
import AdminLogin from "./components/admin/AdminLogin";
import AdminPage from "./components/admin/AdminPage";


class App extends Component {
  
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={Students} />
            <Route exact path="/student/:name" component={Competencies} />
            <Route exact path="/student/:name/:comp" component={CompetencyPage} />
            <Route exact path="/login" component={AdminLogin} />
            <Route exact path="/admin" component={AdminPage} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;


// routing 
// students page has nodes of stuedent when click it takes you to their comptencies
// comptencies page has nodes of compentices and it will take you to the student page
// admin page to alter the data.