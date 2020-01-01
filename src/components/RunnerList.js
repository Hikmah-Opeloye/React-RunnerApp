import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Listdetail from './listdetail'


 class RunnerList extends Component {
   constructor(){
     super()
    this.state = {
        Id:0
    }
   }

  getrunnersdetails = (e) => {
      //e.persist()
      this.State = e.target.id
      ;
      //alert(this.state.Id);
    }
   
  render() {
    const {getrunners,errorMsg} = this.props;
    return (
      <tbody>
        { //if runner array is not empty, map the array and pull out details, else array is null
          getrunners.length?
          getrunners.map(race => {
              return  <tr key={race.RunnerUKAN}>
                  <td className="bord">{race.RunnerName}</td>
                  <td className="bord">{race.RunnerUKAN} </td>
                  <td>
                    <button className='btn btn-success' id={race.RunnerUKAN} onClick={this.getrunnersdetails}>
                      <Link to={{pathname:`/race/${race.RunnerUKAN}`}}>Details</Link>
                    </button></td>
                  <td>
                    <button className='btn btn-danger'>delete</button>
                  </td>
                  </tr>
                
          }) : null }
          {
            //conditional rendering
          errorMsg?<p>{errorMsg}</p> : null
          }
          <Listdetail id={this.state.Id}/>
      </tbody>
      
    )
  }
}
export default RunnerList;