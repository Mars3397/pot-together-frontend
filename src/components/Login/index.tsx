import OrangeMan from '../assets/orange-man.svg'
import OrangeStar from '../assets/orange-star.svg'
import SeperateLine from '../assets/line.svg'
import { ReactComponent as Email } from '../assets/email.svg'
import { ReactComponent as Password } from '../assets/password.svg'
import './Login.css'
import InputField from './InputField'
import React, { useState } from 'react'

const Login = () => {
    const [mailValue, setMailValue] = useState('');
    const [passwdValue, setPasswdValue] = useState('');

    const handleMailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMailValue(event.target.value);
    };

    const handlePasswdChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPasswdValue(event.target.value);
    };

    const handleLogin = () => {
        console.log(`mailValue: ${mailValue}`)
        console.log(`passwdValue: ${passwdValue}`)
    }

    return (
        <div id="login">
            <div className="content">
                <div className="page-title">LOGIN</div>
                <img id="seperate-line" src={SeperateLine} alt="" />
                <InputField Icon={Email} placeholder="MAIL" value={mailValue} onChange={handleMailChange} />
                <InputField Icon={Password} type="password" placeholder="PASSWORD" value={passwdValue} onChange={handlePasswdChange} />
                <button onClick={handleLogin} id="login-button">LOGIN</button>
                <img id="orange-man" src={OrangeMan} alt="" />
                <img id="orange-star1" src={OrangeStar} alt="" />
                <img id="orange-star2" src={OrangeStar} alt="" />
            </div>
        </div>
    )
}

export default Login
