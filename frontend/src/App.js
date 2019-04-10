import React, { Component } from 'react';
import { BrowserRouter , Route, Link,Switch } from "react-router-dom";
import Nav from './components/nav.component'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
  
  <Nav></Nav>
  </BrowserRouter>
    );
  }
}

export default App;
