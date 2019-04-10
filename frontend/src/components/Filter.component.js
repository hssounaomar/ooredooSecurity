import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux'

  


class Filter extends Component {
    state ={
        sites:[],
        sitesType:[],
        siteType:null
    }
    
    filterSites(){
        if(this.state.siteType){
return this.props.sites.filter(item=>{
    return item.type === this.state.siteType;
})
        }
        return [];
    }
    componentWillReceiveProps(nextProps){
    
        if(nextProps.sitesType){
            let siteType=nextProps.sitesType[0];
            console.log(siteType)
            if(siteType){
                this.setState({
                    sitesType:nextProps.sitesType,
                
                siteType:siteType._id
                    }) 
            }
            
        }
     
        
    }

   handleChange =(e)=>{
    let currentList =[];
    let sites =[];

if (e.target.value !== "") {
     currentList =this.filterSites();
  
 
     
    
    sites = currentList.filter(item => {
      
   const lc = item.name.toLowerCase();
        
   const filter = e.target.value.toLowerCase();
          
   return lc.includes(filter);
 });

} else{
    this.setState({
        sites:this.filterSites()
    })
}
this.setState({
    sites
})
  
  

   }

   handleOnBlur =(e)=>{ 
     console.log('test')
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
   addSiteType =(e)=>{
    const index = e.target.selectedIndex;
    const optionElement = e.target.childNodes[index]
    const siteType =  optionElement.getAttribute('data-id');

     this.setState({
   
      siteType
      })
  
}
   listSitesType (){

    return this.state.sitesType.map((item)=>{
        
         return (
              <option key={item._id} data-id={item._id}>{item.name}</option>


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

   
            
          
            		
            	
                <div className="form-group">
                
                <div className="alert alert-success alert-dismissible" role="alert"> 
              
            <strong>Hello geeks!</strong> 
              
       
            <button type="button" className="btn close" 
                data-dismiss="alert" aria-label="Close"> 
                  
                <span aria-hidden="true">×</span> 
            </button> 
        </div>
    
    <label>Filter Par Site</label>
  
    <select className="form-control" onChange={this.addSiteType} >
 {this.listSitesType()}
  
    </select>
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
    return { sites:state.sites,sitesType:state.sitesType,form:state.form.contact };
  }

  export default connect(mapStateToProps)(Filter); 

