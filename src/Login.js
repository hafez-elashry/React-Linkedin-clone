import React, { useState } from 'react';
import './Login.css';
import { auth } from './firebase';
import { useDispatch } from 'react-redux';
import { login } from './features/userSlice';


function Login() {

    const dispatch = useDispatch();

    const [name, setName] = useState("");
    const [pic, setPic] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const loginToApp = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password).then(
            userAuth => {
                dispatch(login({
                    displayName: userAuth.user.name,
                    photoURL: userAuth.user.pic,
                    uid: userAuth.user.uid,
                    email: userAuth.user.email
                }))
            }
        ).catch(err => alert(err))
    }

    const register = () => {
        if(!name){
            return alert('Enter your name')
        }
        auth.createUserWithEmailAndPassword(email, password).then(
            userAuth => {
            userAuth.user.updateProfile({
                displayName: name,
                photoURL: pic
            })
            .then(() => {
                dispatch(login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: name,
                    photoURL: pic
                }))
            })

        }).catch(err => alert(err))
    }

    return (
        <div className="login">
            <img src="https://news.hitb.org/sites/default/files/styles/large/public/field/image/500px-LinkedIn_Logo.svg_.png" alt="" />

            <form>
                <input placeholder="full name required" type="text" value={name} onChange={e => setName(e.target.value)}/>
                <input placeholder="url for profile (optional)" type="text" value={pic} onChange={e => setPic(e.target.value)}/>
                <input placeholder="Email" type="email" value={email} onChange={e => setEmail(e.target.value)}/>
                <input placeholder="Password" type="password" value={password} onChange={e => setPassword(e.target.value)}/>
                <button type="submit" onClick={loginToApp}> Sign In</button>
            </form>
            <p>
                Not a remember? 
                <span className="login__rigister" onClick={register}> Register</span>
            </p>
        </div>
    )
}

export default Login
