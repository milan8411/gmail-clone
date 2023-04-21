import React from 'react'
import './Login.css'
import { Button } from '@mui/material'
import { auth, provider } from './firebase'
import { login } from './features/userSlice'
import { useDispatch } from 'react-redux'

function Login() {
    const dispatch = useDispatch();

    const signIn = () => {
        auth.signInWithPopup(provider)
        .then(({ user }) => {
            dispatch(login({
                displaName: user.displayName,
                email: user.email,
                photoUrl: user.photoURL
            })
            );
        })
        .catch(error => alert(error))
    };
  return (
    <div className='login'>
        <div className='login__container'>
            <img src='https://duet-cdn.vox-cdn.com/thumbor/
            0x0:1320x880/640x427/filters:focal(660x440:661x441)
            :format(webp)/cdn.vox-cdn.com/uploads/chorus_asset/
            file/21939811/newgmaillogo.jpg' alt='' ></img>

            <Button 
            variant='contained'
            color='primary'
            onClick={signIn}>
            Login</Button>

        </div>
    </div>
  )
}

export default Login