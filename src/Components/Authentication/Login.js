import { useRef } from 'react';
import classes from './Login.module.css';

const Login = (props) => {
    const emailInputRef = useRef('');
    const passwordnputRef = useRef('');

    const submitHandler = (event) => {
        event.preventDefault();
        
        const enteredEmail = emailInputRef.current.value;
        const enteredPassword = passwordnputRef.current.value;
        props.onLogin(enteredEmail, enteredPassword);
    };

    return(
        <section>
            <div className={classes.login}>
            <h1>Login</h1>
            <form onSubmit={submitHandler}>
                <input 
                    name='email'
                    type='email'
                    placeholder='Email'
                    required
                    ref={emailInputRef}
                />
                <input 
                    name='password'
                    type='password'
                    placeholder='Password'
                    required
                    ref={passwordnputRef}
                />
                <button>Login</button>
            </form>
            </div>
        </section>
    )

};

export default Login;