import React from 'react';
import axios from '../hoc/axios-data/axios-data';
import  './sampleComponent.css';
class Sample extends React.Component {
   constructor(props){
       super(props)
    this.state = {
            name: '',
            street:'',
            zipCode:'',
            email:''
    }
   }
    proceedtoUserList = (event)=>{
        event.preventDefault();
        // get our form data out of state
        const { name, email, street,Postal } = this.state;
       axios.post('/userdata.json', { name, email, street,Postal })
          .then((result) => {
              this.props.history.push('/userData');
            //access the results here....
          });
    }
     onChange = (e) => {
        /*
          Because we named the inputs to match their
          corresponding values in state, it's
          super easy to update the state
        */
        this.setState({ [e.target.name]: e.target.value });
      }
  render() {
      const { name, email, street,Postal } = this.state;
        let form =(<form className="userForm" onSubmit={this.proceedtoUserList}>
        <input className="userInput" type ="text" name="name" placholder="name" value={name} onChange={this.onChange}/>
        <input className="userInput" type ="email" name="email" placholder="Email" value={email} onChange={this.onChange}/>
        <input className="userInput" type ="text" name="street" placholder="Street" value={street} onChange={this.onChange}/>
        <input className="userInput" type ="text" name="Postal" placholder="PostalCode" value={Postal} onChange={this.onChange}/>
        <button className="submitButton" type="submit">Click Me</button>  

        </form>);
    return (
        <div>
            <h2>UserData Form</h2>
            {form}
        </div>
    );
  }
}

export default Sample;
