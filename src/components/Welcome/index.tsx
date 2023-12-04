import OrangeMan from 'assets/orange-man.svg';
import OrangeStar from 'assets/orange-star.svg';
import SeperateLine from 'assets/line.svg';
import Pot from 'assets/pot.svg';
import { useNavigate } from 'react-router-dom';
import './Welcome.css';

const Welcome = () => {
    let navigate = useNavigate();

    const onClickLogin = () => {
        navigate('/login');
    }

    const onClickSignUp = () => {
        navigate('/signup');
    }

    return (
        <div id="welcome">
            <div className="content">
                <div className="page-title">Pot Together</div>
                <img id="seperate-line" src={SeperateLine} alt="" />
                {/* <button onClick={handleLogin} id="login-button">LOGIN</button> */}
                <div className="decoration">
                    <img id="orange-man" src={OrangeMan} alt="" />
                    <img id="pot" src={Pot} alt="" />
                    <img id="orange-star1" src={OrangeStar} alt="" />
                    <img id="orange-star2" src={OrangeStar} alt="" />
                </div>
                <button className="button" onClick={onClickLogin}>LOGIN</button>
                <button className="button" onClick={onClickSignUp}>SIGN UP</button>
            </div>
        </div>
    )
}

export default Welcome
