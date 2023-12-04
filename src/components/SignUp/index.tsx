import OrangeMan from 'assets/orange-man.svg';
import OrangeStar from 'assets/orange-star.svg';
import SeperateLine from 'assets/line.svg';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import InputField from 'components/CommonComponents/InputField';
import AvatarPicker from './AvatarPicker';
import React, { useState } from 'react';

import './SignUp.css';

const SignUp = () => {
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
        <div id="sign-up">
            <div className='content'>
                <div className="page-title">SIGN UP</div>
                <img id="seperate-line" src={SeperateLine} alt="" />
                <AvatarPicker />
                <InputField Icon={MailOutlineIcon} placeholder="MAIL" value={mailValue} onChange={handleMailChange} />
                <InputField Icon={LockOutlinedIcon} type="password" placeholder="PASSWORD" value={passwdValue} onChange={handlePasswdChange} />
                <button onClick={handleLogin} id="create-button">Create Account</button>
                {/* The images below are decorations */}
                <img id="orange-man" src={OrangeMan} alt="" />
                <img id="orange-star1" src={OrangeStar} alt="" />
                <img id="orange-star2" src={OrangeStar} alt="" />
            </div>
        </div>
    )
}

export default SignUp