import { useRef } from 'react';
import Button from '../UI/Button';
import classes from './SignUp.module.css';

const ForgotPassword = (props) => {
    const emailInputRef = useRef('');

    const submitHandler = (event) => {
        event.preventDefault();

        const enteredEmail = emailInputRef.current.value;
        props.onForgot(enteredEmail);
    ;}

    return (
        <div className={classes.forgot}>
            <h2>Forgot Password ?</h2>
            <form onSubmit={submitHandler}>
                <input
                    type='email'
                    name='email'
                    placeholder='Enter your email'
                    required
                    ref={emailInputRef}
                /><br/>
                <Button>Submit</Button>
            </form>
        </div>
    )
};

export default ForgotPassword;