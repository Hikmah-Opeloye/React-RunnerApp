import React from 'react'
import {BrowserRouter,Switch,Route} from 'react-router-dom'

import App from '../App';
import RunnerDetails from './RunnerDetails';



const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path='/' component={App} exact/>
      <Route path='/race/:id' component={RunnerDetails}/>
    </Switch>
  </BrowserRouter>
);
export default Router;