import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Home from './components/Pages/Home';
import Authentication from './Components/Authentication/Authentication';

function App() {
  const isLogin = useSelector(state => state.authentication.isLogin);

  return (
    <div className="App">
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
      </Switch>
    </div>
  );
}

export default App;
