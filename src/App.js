import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Track from '@/views/track/Track';

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
          <Route path='/' component={Track} ></Route>
          <Route component={PageError} ></Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
