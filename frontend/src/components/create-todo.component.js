import React, {Component} from 'react';
import axios from 'axios';
import { connect } from "react-redux";
import {addEquipement} from '../actions';
import { bindActionCreators } from 'redux'
 class CreateTodo extends Component {
initiateState =()=>{
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

        this.initiateState();
    }

    onChange =(e) =>{
        this.setState({
            [e.target.id]:e.target.value
        });
    }

    onSubmit=(e) => {
        e.preventDefault();
this.props.addEquipement(this.state);
 this.props.history.push("/")
    }

    render() {
        return (
            <div style={{marginTop: 20}}>
                <h3>Create New Equipement</h3>
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
                        <input  type="Date"
                                className="form-control"
                                value={this.state.dateMiseEnService}
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
                        <input type="submit" value="Create Todo" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ addEquipement }, dispatch)
}
export default connect(null,mapDispatchToProps)(CreateTodo);
