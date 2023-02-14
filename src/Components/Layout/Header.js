import { useSelector, useDispatch } from 'react-redux';
import { NavLink, useHistory,  } from 'react-router-dom';
import { authAction } from '../../store/auth-reducer';
import classes from './Header.module.css';
import LogOut from './LogOut';

const Header = () => {
    const isLogin = useSelector((state) => state.authentication.isLogin)
    const dispatch = useDispatch()
    const history = useHistory();

    const logOutHandler = () => {
        dispatch(authAction.logout());
        history.replace('/auth')
    };
    
   
    return (
        <header className={classes.header}>
            <img src="https://android.giveawayoftheday.com/wp-content/plugins/gotd_googleplay_plugin/images/2019/03/com.waynejohnson.dailyexpensetracker_app_icon_1551695948.png" alt="Expense Tracker"/>
            <h1>Expense Tracker..!</h1>
            <nav>
                <ul>
                    <li>
                        <NavLink to='/' 
                            activeClassName={classes.active} 
                            exact >
                            Home
                        </NavLink>
                    </li>
                    {!isLogin && (
                        <li>
                        <NavLink to='/auth' 
                            activeClassName={classes.active}>
                            Login
                        </NavLink>
                    </li>
                    )} 
                    {isLogin && (
                        <li>
                        <NavLink to='/profile' 
                            activeClassName={classes.active}>
                            Profile
                        </NavLink>
                    </li>
                    )}  
                    {isLogin && (
                    <li>
                        <NavLink to='/expense'
                            activeClassName={classes.active}>
                            Expenses
                        </NavLink>
                    </li>
                    )}                         
                </ul>
            </nav>
            {isLogin && (
                <LogOut 
                    onClick={logOutHandler}>
                    Log Out
                </LogOut>
            )}
        </header>
    )
};

export default Header;