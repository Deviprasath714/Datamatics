import React from 'react';
// import axios from '../hoc/axios-data/axios-data';
// import  './userData.css';

class UserData extends React.Component {
  // state ={
  //   userData:[]
  // }
  // componentDidMount(){
  //   axios.get('/userdata.json').then(res=>{
  //     const fetchedData = []
  //           for(let key in res.data){
  //               fetchedData.push({...res.data[key],
  //               id: key})
  //           }
  //           this.setState({ userData:fetchedData}); });
  // }
  render() {
  //   let userData = 
  //   this.state.userData.map((obj)=>{
  //     return  <tr>
  //   <td>{obj.name}</td>
  //   <td>{obj.email}</td>
  //   <td>{obj.street}</td>
  //   <td>{obj.Postal}</td>
  // </tr>

  //   });
    return(
  //   <div>
  //     <h2>USer Data Table</h2>;
  //     <table className="userTable">
  //     <tr>
  //   <th>Name</th>
  //   <th>Email</th>
  //   <th>Street</th>
  //   <th>Postal</th>
  // </tr>
  // {userData}
  //     </table>
  //   </div>

  <div>
    <p>Iam the blog component</p>
  </div>
    )
  }
}

export default UserData;
