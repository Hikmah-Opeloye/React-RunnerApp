import React, {Component} from 'react'

class RunnerDetails extends Component{

  render() {
    const {getraces} = this.props;
    return(
      <div>
      { /* 
        getraces.map(racer => { 
        return <ul key={racer.ukaNumber}>
          <li>yes please{racer.Name} : {racer.ukaNumber}</li>
          <li>{racer.RaceId}</li>
          <li>{racer.RaceActualTime}</li>
          <li>{racer.RaceDate}</li>
          <li>{racer.RaceDistance}</li>
          <li>{racer.RaceTargetTime}</li>
          <li>{racer.RaceTitle}</li>
          <li>{racer.TargetTime}</li>
        </ul>
        })
      */}
      </div>
    )
  }

}

export default RunnerDetails;