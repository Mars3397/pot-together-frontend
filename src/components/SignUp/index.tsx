import ChefCat from 'assets/chef-cat.svg';
import OrangeStar from 'assets/orange-star.svg';
import SeperateLine from 'assets/line.svg';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import InputField from 'components/CommonComponents/InputField/InputField';
import AvatarPicker from './AvatarPicker';
import AvatarPickerPopup from './AvatarPickerPopup';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import avatar0 from 'assets/Avatar1.svg';
import avatar1 from 'assets/Avatar2.svg';
import avatar2 from 'assets/Avatar3.svg';
import avatar3 from 'assets/Avatar4.svg';
import './SignUp.css';

const SignUp = () => {
    const [mailValue, setMailValue] = useState('');
    const [passwdValue, setPasswdValue] = useState('');
    const [showPopup, setShowPopup] = useState(false);
    const [currentAvatar, setAvatar] = useState(0);
    const images = [
        avatar0,
        avatar1,
        avatar2,
        avatar3
    ]
    const handleMailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMailValue(event.target.value);
    };

    const handlePasswdChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPasswdValue(event.target.value);
    };

    const handleSignUp = () => {
        console.log(`mailValue: ${mailValue}`);
        console.log(`passwdValue: ${passwdValue}`);
        console.log(`currentAvatar: ${currentAvatar}`);
    }

    return (
        <div id="sign-up">
            <div className='content'>
                <div className="page-title">SIGN UP</div>
                <img id="seperate-line" src={SeperateLine} alt="" />
                <AvatarPicker setShowPopup={setShowPopup} avatarIcon={images[currentAvatar]} />
                <InputField Icon={MailOutlineIcon} placeholder="MAIL" value={mailValue} onChange={handleMailChange} />
                <InputField Icon={LockOutlinedIcon} type="password" placeholder="PASSWORD" value={passwdValue} onChange={handlePasswdChange} />
                <button onClick={handleSignUp} id="create-button">Create Account</button>
                <div className="login-wrapper">
                    <div className="login-hint">Don't have an account?</div>
                    <Link className="login-link" to="/login">Log in</Link>
                </div>
                {showPopup && <AvatarPickerPopup setShowPopup={setShowPopup} setAvatar={setAvatar} images={images} />}
                {/* The images below are decorations */}
                <img id="chef-cat" src={ChefCat} alt="" />
                <img id="orange-star1" src={OrangeStar} alt="" />
                <img id="orange-star2" src={OrangeStar} alt="" />
            </div>
        </div >
    )
}

export default SignUp