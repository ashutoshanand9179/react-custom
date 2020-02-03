import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/Header';
import Footer from './component/Footer';
import Home from './component/pages/Home';
import Login from './component/pages/Login';
import Register from './component/pages/Register';
import dashboard from './component/admin/Dashboard';
// import { Form } from 'react-bootstrap/lib/Navbar';

function NotFound(){
  return(
    <div className="form-content-container">
      page not found
    </div>
  )
}

function App() {
  return (
    
    <Router>
      <Header />
      <main id="entry-main" className="main entry-main">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/dashboard" component={dashboard} />
        <Route path="*" component={NotFound} />
      </Switch>
      </main>
      <Footer />
    </Router>
    
  );
}

export default App;
