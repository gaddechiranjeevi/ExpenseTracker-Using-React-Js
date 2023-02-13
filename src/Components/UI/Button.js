import { Fragment } from 'react';
import classes from './Button.module.css';

const Button = (props) => {
    return (
        <Fragment>
            <button 
                className={classes.buton} 
                onClick={props.onClick}>
                {props.children}
            </button>
        </Fragment>
    )
};

export default Button;