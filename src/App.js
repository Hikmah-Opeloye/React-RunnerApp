import React,{ Component} from 'react';
import './App.css';
import List from './components/list';
//import Listdetail from './components/listdetail';


class App extends Component {

  render(){
    return (
      <div className="row">
        <h2>My Runner App now</h2>
        <List/>
      </div>
    );
  }
}

export default App;
