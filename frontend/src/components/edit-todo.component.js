import React, {Component} from 'react';
import axios from 'axios';
import {updateEquipement,getEquipementById} from '../actions';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux'
class EditTodo extends Component {
    initiaomarate =()=>{
        this.state = {
            reference: '',
            etat: '',
            prix: 0,
            marque: '',
            modele:'',
            code:1,
            ip:'',
            commentaire:'',
            dateMiseEnService:''
        }
    }
    constructor(props) {
        super(props);
      
    this.initiaomarate()
    
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.equipement){
            //change state with equipement
            this.setState({
            ...nextProps.equipement
            })
        }
    }

componentDidMount(){
    this.props.getEquipementById(this.props.match.params.id);
}

onChange =(e) =>{
     
        this.setState({
            [e.target.id]:e.target.value
        });
    }

    onSubmit=(e) => {
        e.preventDefault();
        const obj = {
            ...this.state
    
        };
     
       this.props.updateEquipement(obj)
        this.props.history.push('/');
    }

    render() {
        
        return (
            <div>
                <h3>Update Todo</h3>
                <form onSubmit={this.onSubmit}> 
                    <div className="form-group">
                        <label>Reference: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.reference}
                                id="reference"
                                onChange={this.onChange}
                                />
                    </div>
                    <div className="form-group">
                        <label>Etat: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.etat}
                                onChange={this.onChange}
                                id="etat"
                                />
                    </div>
                    <div className="form-group">
                        <label>Prix: </label>
                        <input  type="number"
                                className="form-control"
                                value={this.state.prix}
                                onChange={this.onChange}
                                id="prix"
                                />
                    </div>
                    <div className="form-group">
                        <label>DateMiseEnService: </label>
                        <input  type="datetime-local"
                                className="form-control"
                                value={this.state.dateMiseEnService || ""}
                                onChange={this.onChange}
                                id="dateMiseEnService"
                                />
                    </div>
                    <div className="form-group">
                        <label>Marque: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.marque}
                                onChange={this.onChange}
                                id="marque"
                                />
                    </div>
                    <div className="form-group">
                        <label>Modele: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.modele}
                                onChange={this.onChange}
                                id="modele"
                                />
                    </div>
                    <div className="form-group">
                        <label>Code: </label>
                        <input  type="number"
                                className="form-control"
                                value={this.state.code}
                                onChange={this.onChange}
                                id="code"
                                />
                    </div>
                    <div className="form-group">
                        <label>IP: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.ip}
                                onChange={this.onChange}
                                id="ip"
                                />
                    </div>
                    <div className="form-group">
                        <label>Commentaire: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.commentaire}
                                onChange={this.onChange}
                                id="commentaire"
                                />
                    </div>
                    
                    <div className="form-group">
                        <input type="submit" value="Update Equipement" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}
function mapStateToProps({equipement},ownProps) {

    return { equipement};
  }

function mapDispatchToProps(dispatch){
    return bindActionCreators({ updateEquipement,getEquipementById }, dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(EditTodo);