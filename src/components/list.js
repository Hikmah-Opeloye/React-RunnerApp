import React, { Component } from 'react'
import axios from 'axios'
import RunnerList from './RunnerList'
import Listdetail from './listdetail'



 class List extends Component {
   constructor(props) {
     super(props)
   
     //initializing state to runners empty array 
     //control flows to render 
     this.state = {
        runners: [],
        error:'',
        id:0
     }
   }
  
   //a get request is made to http endpoint using axios which has promise
   //get runner details 
   componentDidMount() {
     axios.get('https://redcarrunning.azurewebsites.net/api/RunnerService')
     .then(response => {
       //if response log to console
        console.log(response)
        //update the state
        //store http response in runners array using setState
        //when state changes the component will rerender
        //control flows  a second time to render
        this.setState({runners: response.data})
     })
      //if error log to console
     .catch(error => {
       this.setState({errorMsg: 'Error retrieving data'})
       console.log(error)
     })
   }
   
   //array is empty, runners is not rendered  control flows back to componentDid mount
   //and this time the array is no longer empty and component is rendered
  render() {
    //destructure state property
    const {runners} = this.state;
    return (
      
        <div className="col-7">
          <table className="table table-striped table-bordered">
            <thead>
            <tr className="bg-success text-white">
              <th>Name</th>
              <th>UkanNumber</th>
              <th>Details</th>
              <th>Delete</th>
              </tr>
            </thead>
            <RunnerList getrunners={runners}/>
          </table>
          <Listdetail/>
      </div>
    )
  }
}
export default List;