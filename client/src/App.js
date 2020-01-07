import React from 'react';
import logo from './logo.svg';
import {BrowserRouter as Router, Route,Link} from 'react-router-dom';
import OtherPage from './otherPage';
import Fib from './fib'
import './App.css';

function App() {
  return (
    <Router>
    <div className="App">

      
      <div>
        <Route exact path="/" component={Fib}/>
        <Router exact path="/otherpage" component={OtherPage}/>
        <Link to="/">Home</Link>
        <Link to="/otherpage">Other Page</Link>
      </div>
    </div>
    </Router>
  );
}

export default App;
