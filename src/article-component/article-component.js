import React from 'react';
import './article-component.css'
import axios from '../hoc/axios-data/axios-data';
import ModalPopup from '../Modal/modalComponent';

class Article extends React.Component {
    constructor(props){
       super(props)
    this.state = {
           employeeData: [],
        currentEmployee:{},
        showModal: false
    }
   }

    getDetails= (obj)=>{
       // let currentEmployer = obj;
        this.setState({currentEmployee:obj, showModal:true})
        
    }
    closehandler = ()=>{
        this.setState({showModal: false})
    }
    componentDidMount(){
        axios.get().then((res)=>{
            const employeeArray = res.data.data
            this.setState({employeeData:employeeArray });

        })
    }
     render() {
         if(this.state.showModal){
             return <ModalPopup close={this.closehandler} show = {this.state.showModal} data={this.state}/>;
         }
        let userData = 
        this.state.employeeData.map((obj,index)=>{

        return  <tr key={index}>
        <td>{obj.employee_name}</td>
        <td>{obj.employee_age}</td>  
        <td><button onClick= {() => this.getDetails(obj)}>Details</button></td>
        </tr>
        });

       
    return(
    <div>
        <h2>USer Data Table</h2>
        <table className="employeeTable">
            <thead>
                <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Details</th>
                </tr>
            </thead>
                <tbody>
                   {userData} 
                </tbody>
        </table>
        
    </div>
    )
    
  }
}

export default Article; 
