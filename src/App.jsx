import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeScreen from './screens/homeScreen/homeScreen';
import GameScreen from './screens/gameScreen/gameScreen';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/game" component={GameScreen} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
