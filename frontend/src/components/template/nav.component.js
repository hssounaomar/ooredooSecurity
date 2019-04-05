import React from 'react';
import TodosList from "../todos-list.component";
import CreateTodo from "../create-todo.component";
import { Route,Switch,NavLink} from 'react-router-dom';

let NavComponent = props => {
  
    return (  <div className="container-fluid page-body-wrapper  navback">
  
    <nav className="sidebar sidebar-offcanvas" id="sidebar">
      <ul className="nav">
        {/* <li className="nav-item nav-profile">
          <div className="nav-link">
            <div className="user-wrapper">
              <div className="profile-image">
                <img src="/images/faces/face1.jpg" alt="profile image"/>
              </div>
              <div className="text-wrapper">
                <p className="profile-name">Richard V.Welsh</p>
                <div>
                  <small className="designation text-muted">Manager</small>
                  <span className="status-indicator online"></span>
                </div>
              </div>
            </div>
            <button className="btn btn-success btn-block">New Project
              <i className="mdi mdi-plus"></i>
            </button>
          </div>
        </li>*/}
        <li className="nav-item"> 
          <NavLink activeClassName="test" className="nav-link"  to="/" >
          <i className="menu-icon mdi mdi-cctv"></i>
            <span className="menu-title">Equipements</span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link"  activeClassName="test" to="/equipements/create" refresh="false">
            <i className="menu-icon mdi mdi-content-paste"></i>
            <span className="menu-title">Interventions</span>
          </NavLink>
        </li>
        {/* <li className="nav-item">
          <a className="nav-link" data-toggle="collapse" to="#ui-basic" aria-expanded="false" aria-controls="ui-basic">
            <i className="menu-icon mdi mdi-content-copy"></i>
            <span className="menu-title">Basic UI Elements</span>
            <i className="menu-arrow"></i>
          </a>
          <div className="collapse" id="ui-basic">
            <ul className="nav flex-column sub-menu">
              <li className="nav-item">
                <a className="nav-link" to="pages/ui-features/buttons.html">Buttons</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" to="pages/ui-features/typography.html">Typography</a>
              </li>
            </ul>
          </div>
        </li> */}
        <li className="nav-item">
          <NavLink activeClassName="test" className="nav-link" to="pages/forms/basic_elements.html">
            <i className="menu-icon mdi mdi-calendar-clock"></i>
            <span className="menu-title">Plannings</span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink activeClassName="test" className="nav-link" to="pages/charts/chartjs.html">
            <i className="menu-icon mdi mdi-chart-line"></i>
            <span className="menu-title">Statistiques</span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink activeClassName="test" className="nav-link" to="pages/tables/basic-table.html">
             <i className="menu-icon mdi mdi-clipboard-account"></i>

            <span className="menu-title">Equipe</span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink activeClassName="test" className="nav-link" to="pages/icons/font-awesome.html">
             <i className="menu-icon mdi mdi-cube-send"></i>
            <span className="menu-title">Fournisseurs</span>
          </NavLink>
        </li>

      </ul>
    </nav>

    <div className="main-panel creatediv" >
    
    <Switch>
              <Route exact path='/' component={TodosList} />
               <Route exact path='/equipements/create' component={CreateTodo} />
          </Switch>
  
    </div>
   
  </div>
)
}
export default NavComponent;
