import React, { Component } from 'react'
import axios from 'axios'


 class Listdetail extends Component {

  constructor(props) {
    super(props)

    this.state = {
      runnersdetail: [],
      error:'',
      id:0
   }
  }
 /*
  getrunnersdetails = (e) => {
  //  const {getrunnersdetails} = this.props;
    e.persist()
    alert("yo",e.target.id);
    this.setState({
      id:e.target.id
    });
  }
*/
  //a get request is made to http endpoint using axios which has promise
   //get runner details 
   componentDidMount() {
    alert("yo"+this.state.id);
     const url = 'https://redcarrunning.azurewebsites.net/api/RunnerService?ukan='
     const Id = this.state.id;
    // console.log(Id);
    axios.get(url+Id)
    .then(response => {
      //if response log to console
       console.log(response)
       //update the state
       //store http response in runners array using setState
       //when state changes the component will rerender
       //control flows  a second time to render
       this.setState({runnersdetail: response.data})
    })
     //if error log to console
    .catch(error => {
      this.setState({errorMsg: 'Error retrieving data'})
      console.log(error)
    })
  }
  render() {
    //const {getrunnersdetails} = this.props;
    return (
      <div></div>
    )
  }
}
export default Listdetail;