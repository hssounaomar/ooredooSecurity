import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux'

  


class Filter extends Component {
    state ={
        sites:[]
    }

   handleChange =(e)=>{
   // Variable to hold the original version of the list
   let currentList = [];
   // Variable to hold the filtered list before putting into state
let newList = [];
   
   // If the search bar isn't empty
if (e.target.value !== "") {
       // Assign the original list to currentList
 currentList = this.props.sites;
     
       // Use .filter() to determine which items should be displayed
       // based on the search terms
 newList = currentList.filter(item => {
           // change current item to lowercase
   const lc = item.name.toLowerCase();
           // change search term to lowercase
   const filter = e.target.value.toLowerCase();
           // check to see if the current list item includes the search term
           // If it does, it will be added to newList. Using lowercase eliminates
           // issues with capitalization in search terms and search content
   return lc.includes(filter);
 });
} 
   // Set the filtered state based on what our rules added to newList
this.setState({
 sites: newList
});
   }
   handleOnBlur =(e)=>{
     
this.setState({
    sites:[]
})
   }
  
   listSites (){

      return this.state.sites.map((item)=>{
          
           return (
            <a key={item._id}  onMouseDown={()=>this.props.addSite(item)}  className="list-group-item list-group-item-action">{item.name}</a>


           )
       })
   }
  render() {
    return (
        <div className="filter__wrap">
            <div className="filter__cart">
                <div className="filter__cart__inner">
                    <div className="filter__menu__close__btn">
                        <a href="#"><i className="zmdi zmdi-close"></i></a>
                    </div>

   
            
          
            		
            		
           <div className="list-group" onMouseUp={()=>this.handleOnBlur()}>   
           <input type="text" className="form-control"  placeholder="Search By type of Site"  onChange={this.handleChange}/>     
           {this.listSites()}
           </div> 
              		
            
          
     

                        
{/*                             
                            <div class="input-group mb-12">
  <div className="input-group-prepend">
    <span className="input-group-text" id="basic-addon1">@</span>
  </div>
  <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
</div> */}
           
                   
                        
                   
                </div>
            </div>
        </div>
    )
    }
}
function mapStateToProps(state) {
    return { sites:state.sites,form:state.form.contact };
  }

  export default connect(mapStateToProps)(Filter); 

