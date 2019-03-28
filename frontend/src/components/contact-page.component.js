import React,{Component} from 'react'
import ContactForm from './contact-form.component'
import { connect } from "react-redux";
 class ContactPage extends Component {
  submit = values => {
    // print the form values to the console
    console.log(values)
  }
//   componentWillReceiveProps(nextProps){
//       if(nextProps.form){
//           if(nextProps.form.values)
//           console.log(nextProps.form.values)
//       }
//   }
  render() {
    return <ContactForm onSubmit={this.submit} />
  }
}
function mapStateToProps(state) {

    return { form:state.form.contact };
  }
export default connect(mapStateToProps)(ContactPage);