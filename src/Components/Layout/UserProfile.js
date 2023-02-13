import axios from 'axios';
import classes from './UserProfile.module.css';
import { BsGithub, BsGlobe } from 'react-icons/bs';
import { useRef, useEffect } from 'react';
import Button from '../UI/Button';
import { useSelector } from 'react-redux';

const UserProfile = (props) => {
    const nameInputRef = useRef('');
    const urlInputRef = useRef('');
    const idToken = useSelector(state => state.authentication.idToken)
    
  useEffect(() => {
    axios.post(
        'https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyBNKcwJ85YxV00sJT8V4pSH2dMBTCWv77k',
        {idToken: idToken}
    ).then((res) => {
        console.log(res);
        console.log(res.data.users[0])

        const displayName = res.data.users[0].displayName;
        const photoUrl = res.data.users[0].photoUrl;

        nameInputRef.current.value = displayName;
        urlInputRef.current.value = photoUrl;
      }).catch ((err) => {
        console.log(err);
    })
  });
    
    const updateProfiletHandler = async(event) => {
        event.preventDefault();

        const enteredName = nameInputRef.current.value;
        const enteredUrl = urlInputRef.current.value;

        const updatedInfo = {
            idToken: idToken,
            displayName: enteredName,
            photoUrl: enteredUrl,
            deleteAttribute: null,
            returnSecureToken: true	
        }
        try {
            const res = await axios.post (
                'https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyBNKcwJ85YxV00sJT8V4pSH2dMBTCWv77k'
                , updatedInfo 
            );
                console.log(res);
            } catch (err) {
                console.log(err);
            }
        }
    
    return (
        <section className={classes['user-profile']}>
                <h2>Contact Details</h2>
            <form onSubmit={updateProfiletHandler}>
                    <BsGithub size={25} />
                    <label htmlFor='name'>Full Name</label>
                    <input 
                        id='name'
                        type='text'
                        name='name'
                        required
                        ref={nameInputRef}
                    />
                    <BsGlobe size={25} />
                    <label htmlFor='name'>Profile Photo URL</label>
                    <input 
                        id='url'
                        type='url'
                        name='url'
                        required
                        ref={urlInputRef}
                    />
                <Button>Update</Button>
            </form>
        </section>
    )
};

export default UserProfile;