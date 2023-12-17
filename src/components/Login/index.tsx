import ChefCat from 'assets/chef-cat.svg';
import OrangeStar from 'assets/orange-star.svg';
import SeperateLine from 'assets/line.svg';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import InputField from 'components/CommonComponents/InputField/InputField';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLogin } from 'hooks/useUser';
import './Login.css';

const Login = () => {
    const [mailValue, setMailValue] = useState('');
    const [passwdValue, setPasswdValue] = useState('');
    const loginMutation = useLogin();

    const handleMailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMailValue(event.target.value);
    };

    const handlePasswdChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPasswdValue(event.target.value);
    };

    const handleLogin = () => {
        loginMutation.mutate({
            email: mailValue,
            password: passwdValue
        });
    }

    return (
        <div id="login">
            <div className="content">
                <div className="page-title">LOGIN</div>
                <img id="seperate-line" src={SeperateLine} alt="" />
                <InputField Icon={MailOutlineIcon} placeholder="MAIL" value={mailValue} onChange={handleMailChange} />
                <InputField Icon={LockOutlinedIcon} type="password" placeholder="PASSWORD" value={passwdValue} onChange={handlePasswdChange} />
                <button onClick={handleLogin} id="login-button">LOGIN</button>
                <div className="signup-wrapper">
                    <div className="signup-hint">Don't have an account?</div>
                    <Link className="signup-link" to="/signup">Create an account</Link>
                </div>

                <img id="chef-cat" src={ChefCat} alt="" />
                <img id="orange-star1" src={OrangeStar} alt="" />
                <img id="orange-star2" src={OrangeStar} alt="" />
            </div>
        </div>
    )
}

export default Login
