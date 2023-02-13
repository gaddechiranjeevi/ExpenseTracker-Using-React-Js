import { useRef } from "react";
import classes from './SignUp.module.css';

const SignUp = (props) => {
    const emailInputRef = useRef('');
    const passwordnputRef = useRef('');
    const confirmpasswordnputRef = useRef('');

    const submitHandler = (event) => {
        event.preventDefault();
        
        const enteredEmail = emailInputRef.current.value;
        const enteredPassword = passwordnputRef.current.value;
        const enteredcConfirmPassword = confirmpasswordnputRef.current.value;

        if (enteredPassword !== enteredcConfirmPassword){
          alert('Incorrect Password');
        } else {
          props.onSignUp(enteredEmail, enteredcConfirmPassword)
        }
      }
      
      return(
        <section>
          <div className={classes.signUp}>
            <h1>SignUp</h1>
            <form onSubmit={submitHandler}>
              <input 
                name="email"
                type='email'
                placeholder="Email"
                required
                ref={emailInputRef} 
              />
              <input 
                name="password"
                type='password'
                placeholder="Password"
                required
                ref={passwordnputRef} 
              />
              <input 
                name="password"
                type='password'
                placeholder="Confirm Password"
                required
                ref={confirmpasswordnputRef} 
              />
              <button>Sign Up</button>
            </form>
          </div>
        </section>
      )
    }

export default SignUp;