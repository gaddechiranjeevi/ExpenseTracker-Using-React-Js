import './App.css';
import { Fragment } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from "./Components/Layout/Header";
import { useSelector } from 'react-redux';
import Home from "./Components/Pages/Home";
import ProfilePage from "./Components/Pages/Profile";
import ExpensePage from './components/Pages/ExpensePage';
import Authentication from './Components/Authentication/Authentication';

function App() {
  const isLogin = useSelector(state => state.authentication.isLogin);

  return (
    <Fragment>
      <Header />
      <main>
     <Switch>
          {!isLogin &&
          <Route path='/' exact>
              <Home />
            </Route>}
          <Route path='/' exact>
            {isLogin && <Home />}
            {!isLogin && <Redirect to='/auth' />}
            </Route>
            <Route path='/auth'>
              {!isLogin && <Authentication />}
            </Route>
            <Route path='/profile'>
              {isLogin && <ProfilePage />}
              {!isLogin && <Redirect to='/auth' />}
            </Route>
            <Route path='/expense'>
              {isLogin && <ExpensePage />}
              {!isLogin && <Redirect to='/auth' />}
            </Route>
      </Switch>
      </main>
    </Fragment>
  );
}

export default App;
