import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import {deleteEquipementById} from '../actions';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux'

const Todo = props => (
    
    <tr>
        <td >{props.todo.reference}</td>
        <td >{props.todo.etat}</td>
        <td >{props.todo.prix}</td>
        <td>{props.todo.dateMiseEnService}</td>
        <td >{props.todo.marque}</td>
        <td>{props.todo.modele}</td>
        <td >{props.todo.code}</td>
        <td>{props.todo.ip}</td>
        <td >{props.todo.commentaire}</td>
        <td>
            <Link to={"/edit/"+props.todo._id}>Edit</Link>
            <button onClick={()=>{props.delete(props.todo._id)}} >Delete</button>
        </td>
    </tr>
)

 class TodosList extends Component {

    
    delete =(id) =>{
        console.log(id)
      this.props.deleteEquipementById(id);
    };
     
   
    componentDidMount() {
  
    }

    componentDidUpdate() { 
      
    }

    todoList (deleteFunction=this.delete) {
      
      
        return this.props.equipements.map(function(currentTodo, i) {
            return <Todo todo={currentTodo} delete={deleteFunction} key={i} />;
        });
    }

    render() {
        //console.log(this.props.equipements)
        return (
            <div>
                <h3>Equipement List</h3>
                <table className="table table-striped" style={{ marginTop: 20 }}>
                    <thead>
                        <tr>
                            <th>Reference</th>
                            <th>Etat</th>
                            <th>Prix</th>
                            <th>DateMiseEnService</th>
                            <th>Marque</th>
                            <th>Modele</th>
                            <th>Code</th>
                            <th>IP</th>
                            <th>Commentaire</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                     <tbody>
                        { this.todoList() }
                    </tbody>
                </table>
            </div>
        )
    }
}
function mapStateToProps(state) {

    return { equipements:state.equipements,form:state.form.contact };
  }

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ deleteEquipementById }, dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(TodosList);