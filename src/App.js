import './App.css';
import { Fragment } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Home from "./Components/Pages/Home";
import ProfilePage from "./Components/Pages/Profile";
import Authentication from './Components/Authentication/Authentication';

function App() {
  const isLogin = useSelector(state => state.authentication.isLogin);

  return (
    <Fragment>
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
      </Switch>
      </main>
    </Fragment>
  );
}

export default App;
