import React, { Component } from 'react';
import { BrowserRouter , Route, Link,Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import CreateTodo from "./components/create-todo.component";
import EditTodo from "./components/edit-todo.component";
import TodosList from "./components/todos-list.component";
import ContactPage from "./components/contact-page.component";
import HeaderComponent from "./components/template/header.component"
import NavComponent from "./components/template/nav.component";
class App extends Component {
  render() {
    return (
      <BrowserRouter>
  <div className="container-scroller">
<HeaderComponent></HeaderComponent>
<NavComponent>
  
</NavComponent>
  </div>
  </BrowserRouter>
    );
  }
}

export default App;
