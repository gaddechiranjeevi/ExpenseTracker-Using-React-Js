import classes from './Authentication.module.css';
import SignUp from "./SignUp";

const Authentication = () => {


    const SignUpHandler = (email, password) => {
        fetch(
                'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBNKcwJ85YxV00sJT8V4pSH2dMBTCWv77k',
                {
                    method: 'POST',
                    body: JSON.stringify({
                        email: email,
                        password: password,
                        returnSecureToken: true
                    }),
                    headers:{
                        "Content-Type": "application/json",
                    }
                }
            )
            .then((res) => {
                if(res.ok){
                  return res.json()
                }else{
                  return res.json().then((data) => {
                    const errormsg = data.error.message;
                    throw new Error(errormsg)
                  })
                }
              })
              .then((data) => {
                console.log('successfully created account');
                console.log(data);
              })
              .catch((err) => {
                alert(err.message);
              })
        }



    return (
        <div className={classes.auth}>
          <div >
            <SignUp onSignUp={SignUpHandler} />
            </div>
        </div>
    )
};

export default Authentication;