import React, { Component } from 'react';
import { BrowserRouter , Route, Link,Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import CreateTodo from "./components/create-todo.component";
import EditTodo from "./components/edit-todo.component";
import TodosList from "./components/todos-list.component";
import ContactPage from "./components/contact-page.component";
import logo from "./logo.png";

class App extends Component {
  render() {
    return (
<BrowserRouter>
        <div className="container">
          
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="https://codingthesmartway.com" target="_blank">
              <img src={logo} width="30" height="30" alt="CodingTheSmartWay.com" />
            </a>
            <Link to="/" className="navbar-brand"> Equipement App</Link>
            <div className="collpase nav-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/" className="nav-link">Equipements</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/create" className="nav-link">Create Equipement</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/contact" className="nav-link">Contact Page</Link>
                </li>
              </ul>
            </div>
          </nav>
<Switch>
          <Route path="/" exact component={TodosList} />
          <Route path="/edit/:id" component={EditTodo} />
          <Route path="/create" component={CreateTodo} />
          <Route path="/contact" component={ContactPage} />
          </Switch>
        </div>
        </BrowserRouter>
    );
  }
}

export default App;
