import { Fragment } from "react";
import classes from "./Page.module.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Home = () => {

    const isLogin = useSelector(state => state.authentication.isLogin);

    return (
        <Fragment>
            { isLogin ? (
            <div className={classes.home}>
                <h>Hello !</h>
            <h1>Welcome to Expense Tracker</h1>
            <p>Expense Tracker can tracker your daily expenses and Manage unnecessary expense</p>
            
            </div> ):(
               <div className={classes.details}>
               <p>
                 Welcome to Expense Tracker!
               </p>
               <p1>
                   "Expense Tracker Which takes note of all your daily expenses"<br/><br/>
                    <p2><span>Click on <Link to="/auth">Login</Link> and</span><br/><br/></p2>
                    Start managing your daily expenses 
               </p1>
           </div>
            )}
        </Fragment>
    )
};

export default Home;