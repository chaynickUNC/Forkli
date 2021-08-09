import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Home from './components/Home';
import SignUp from './components/SignUp/SignUp';
import Login from './components/Login/Login';
import firebase from 'firebase';



function App() {

  const firebaseApp = firebase.apps[0];

  return (
    <Router>
      <div className="App">

        <Switch>
          
          <Route path='/' exact component={Home}/>
          <Route path='/about' exact component={About}/>
          <Route path='/signup' exact component={SignUp}/>
          <Route path='/login' exact component={Login}/>
  
        </Switch>

        

      </div>
    </Router>
  );
}

export default App;
