import React from 'react';
import DatePicker from 'react-datepicker';
 
import 'react-datepicker/dist/react-datepicker.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import  './contact-component.css';
class Contact extends React.Component {
    constructor(props){
    super(props);

    this.state = {
      fields: {},
      errors: {},
      startDate: new Date()
    }
    this.handleDate = this.handleDate.bind(this);
  }
  handleDate(date) {
    this.setState({
      startDate: date
    })
  }

  handleValidation(){
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    //Name
    if(!fields["fname"]){
      formIsValid = false;
      errors["fname"] = "Cannot be empty";
    }
    if(!fields["lname"]){
      formIsValid = false;
      errors["lname"] = "Cannot be empty";
    }

    if(typeof fields["fname"] !== "undefined"){
      if(!fields["fname"].match(/^[a-zA-Z]+$/)){
        formIsValid = false;
        errors["fname"] = "Only letters";
      }      	
    }

    if(typeof fields["lname"] !== "undefined"){
      if(!fields["lname"].match(/^[a-zA-Z]+$/)){
        formIsValid = false;
        errors["lname"] = "Only letters";
      }      	
    }
    if(this.state.startDate === '' || this.state.startDate === null ){
        formIsValid = false;
        errors["dob"] = "cannot be empty";
    }else{
        var today = new Date();
    var birthDate = new Date(this.state.startDate); 
    var age_now = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) 
    {
        age_now--;
    }
    if(age_now > 17){
        alert("your age is" ,age_now )
    }else{
        alert("Your age should be Minimum 18");
        formIsValid = false;
        errors["dob"] = "Please Select a valid age";
    }
    }

    //Email
    if(!fields["email"]){
      formIsValid = false;
      errors["email"] = "Cannot be empty";
    }

    if(typeof fields["email"] !== "undefined"){
      let lastAtPos = fields["email"].lastIndexOf('@');
      let lastDotPos = fields["email"].lastIndexOf('.');

      if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["email"].indexOf('@@') === -1 && lastDotPos > 2 && (fields["email"].length - lastDotPos) > 2)) {
        formIsValid = false;
        errors["email"] = "Email is not valid";
      }

    }



    this.setState({errors: errors});
    return formIsValid;
  }

  contactSubmit(e){
    e.preventDefault();
    if(this.handleValidation()){
      alert("Thanks for the Submission. Our Executives will contact you");
    }else{
      alert("Form has errors.")
    }

  }

  handleChange(field, e){    		
    let fields = this.state.fields;
    fields[field] = e.target.value;        
    this.setState({fields});
  }

  render(){
    return (
      <div className="form-section">    
             	
        <form name="contactform" className="contactform" onSubmit= {this.contactSubmit.bind(this)}>
          <div className="col-md-12 ">
               <h4 className="text-center">Contact Form</h4>
            <fieldset>
                <div className="input-fields">
                    <input ref="fname" type="text" size="30" placeholder="FirstName" onChange={this.handleChange.bind(this, "fname")} value={this.state.fields["fname"]}/>
                    <span className="error">{this.state.errors["fname"]}</span>
                </div>
                <div className="input-fields">
                    <input ref="lname" type="text" size="30" placeholder="LastName" onChange={this.handleChange.bind(this, "lname")} value={this.state.fields["lname"]}/>
                    <span className="error">{this.state.errors["lname"]}</span>
                </div>
                <div className="input-fields">
                    <input refs="email" type="text" size="30" placeholder="Email" onChange={this.handleChange.bind(this, "email")} value={this.state.fields["email"]}/>
                    <span className="error">{this.state.errors["email"]}</span>
                </div>
                <div className="input-fields">
                    <DatePicker
                    selected={ this.state.startDate }
                    onChange={ this.handleDate }
                    name="startDate"
                     placeholder="Choose a date"
                    />
                    <span className="error">{this.state.errors["dob"]}</span>
                </div>
            </fieldset>
          </div>
          <div className="col-md-12">
            <fieldset>
              <button className="submitbutton" id="submit" value="Submit">Send Message</button>
            </fieldset>
          </div>
        </form>
      </div>
    )
  
  }
}

export default Contact;
