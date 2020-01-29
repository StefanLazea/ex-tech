import React from 'react';
import {HashRouter as Router, Switch, Route} from 'react-router-dom'
import Main from './Main'
import Item from './Item'

class App extends React.Component{
  render(){
    return <Router>
      <Switch>
        <Route path="/" exact={true} >
          <Main /> 
        </Route>
        <Route path="/:item" exact={true}>
          <Item /> 
        </Route>
      </Switch>
    </Router>
  }
}

export default App;
