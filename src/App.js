import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Styles
import './styles/Main.scss';

// Routes
import { Home } from './components/pages/Home';
import { AddUser } from './components/pages/AddUser';
import { EditUser } from './components/pages/EditUser';

// Layout
import { Nav } from './components/layout/Nav/Nav';
import { Header } from './components/layout/Header/Header';


function App() {
  return (
    <div className="App">
      <Header />

      <div className="wrapper">
        <Nav />
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/add" component={AddUser} />
            <Route path="/edit/:id" component={EditUser} />
          </Switch>
        </Router>

      </div>



    </div>
  );
}

export default App;
