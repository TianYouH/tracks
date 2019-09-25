import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '@/views/home/Home';
import Todo from '@/views/todo/Todo';
import ConnectCounter from '@/views/counter/ConnectCounter';

const PageError = () => (
  <div>
    404
  </div>
);

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} ></Route>
          <Route path='/todo' component={Todo} ></Route>
          <Route path='/counter' component={ConnectCounter} ></Route>
          <Route component={PageError} ></Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
