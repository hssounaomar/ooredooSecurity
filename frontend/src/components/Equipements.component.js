
import React, { Component } from 'react';
import Filter from './Filter.component';
import {deleteEquipementById} from '../actions/equipements.actions';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux'
const Equipement =props =>(
   <div className="col-md-3 single__pro col-lg-3 cat--1 col-sm-4 col-xs-12">
                                <div className="product foo">
                                    <div className="product__inner">
                                        <div className="pro__thumb">
                                            <a href="#">
                                                <img src="images/product/1.png" alt="product images"/>
                                            </a>
                                        </div>
                                        <div className="product__hover__info">
                                            <ul className="product__action">
                                                <li><a data-toggle="modal" data-target="#productModal" title="Quick View" className="quick-view modal-view detail-link" href="#"><span className="ti-plus"></span></a></li>
                                                <li><a title="Add TO Cart" href="cart.html"><span className="ti-shopping-cart"></span></a></li>
                                                <li><a title="Wishlist" href="wishlist.html"><span className="ti-heart"></span></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="product__details">
                                        <h2><a href="product-details.html">{props.equipement.state}</a></h2>
                                        <ul className="product__price">
                                            <li className="old__price">$16.00</li>
                                            <li className="new__price">$10.00</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                   
)


class Equipements extends Component {

    state = {
        toggleFilter: false,
        site :null,
        equipements:this.props.equipements
    }
addSite =(site)=>{
this.setState({
    site,
    equipements:this.props.equipements.filter(equi=>{
        return equi.history[0].site===site._id
    })
})

   

  
}

    delete =(id) =>{
        console.log(id)
      this.props.deleteEquipementById(id);
    };
    toggleClassFilter = (e) => {
        this.setState({toggleFilter: !this.state.toggleFilter})
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.equipements){
            //change state with equipement
            this.setState({
            equipements:nextProps.equipements
            })
        }

    }
    equipementList (deleteFunction=this.delete) {
        if(this.state.equipements){

    
        return this.state.equipements.map(function(currentEquipement, i) {
            return <Equipement equipement={currentEquipement} delete={deleteFunction} key={i} />;
        });
    }
    return null;
    }
displaySiteSticky =()=>{
if(this.state.site)
    return (   <span className="badge badge-pill badge-primary">{this.state.site.name}</span>)

    return (<span className="badge badge-pill badge-primary">All</span>)

}
  render() {
   
    return (


<section className="htc__product__area shop__page ptb--130 bg__white">
            <div className="container">
                <div className="htc__product__container">
                  
                    <div className="row">
                       
                        <div className="col-md-12">
                            <div className="filter__menu__container">
                                <div className="product__menu">
                                {this.displaySiteSticky()}
                                    {/* <button data-filter="*"  className="is-checked">All</button>
                                    <button data-filter=".cat--1">Furnitures</button>
                                    <button data-filter=".cat--2">Bags</button>
                                    <button data-filter=".cat--3">Decoration</button>
                                    <button data-filter=".cat--4">Accessories</button> */}
                                    </div>
                                <div className="filter__box">
                                    <a className="filter__menu" onClick={this.toggleClassFilter}  href="#">filter</a>
                                </div>
                            </div>
                        </div>
                    </div>
                 
                    {/* <Filter toggleFilter={this.toggleClassFilter} className={this.state.toggleFilter ? 'filter__wrap filter__menu__on' : 'filter__wrap'}></Filter> */}
<Filter addSite={this.addSite}></Filter>
                    <div className="row">
                        <div className="product__list another-product-style">
                     {this.equipementList()}
                         
                        </div>
                    </div>
                
                    <div className="row mt--60">
                        <div className="col-md-12">
                            <div className="htc__loadmore__btn">
                                <a href="#">load more</a>
                            </div>
                        </div>
                    </div>
                  
                </div>
            </div>
        </section>
)
    }
}
function mapStateToProps(state) {
    return { equipements:state.equipements,form:state.form.contact };
  }

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ deleteEquipementById }, dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(Equipements); 