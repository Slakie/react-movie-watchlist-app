import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
} from 'react-router-dom';
import { Header } from './components/Header';
import { Watchlist } from './components/Watchlist';
import { Watched } from './components/Watched';
import { Add } from './components/Add';
import { GlobalProvider } from './context/GlobalState';
import { Footer } from './components/Footer';
import './App.css';

function App() {
  return (
    <GlobalProvider>
      <Router>
        <Header />
        <Switch>
          <Redirect from="/" to="/watchlist" exact />
          <Route path="/watchlist">
            <Watchlist />
          </Route>
          <Route path="/watched">
            <Watched />
          </Route>
          <Route path="/add">
            <Add />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </GlobalProvider>
  );
}

export default App;
