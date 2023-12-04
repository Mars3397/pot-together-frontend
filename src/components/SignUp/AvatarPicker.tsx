import './SignUp.css';
import AvatarFrame from 'assets/avatar-frame.svg';
import Avatar0 from 'assets/avatars/avatar-0.svg';

interface AvatarPickerProps {

}

const AvatarPicker = (props: AvatarPickerProps) => {
    return (
        <div className="avatar-picker">
            <div className="avatar-wrapper">
                <img className="avatar-frame" src={AvatarFrame} alt="" />
                <img className="avatar-icon" src={Avatar0} alt="" />
            </div>
            <div className="avatar-label">Avatar</div>
        </div>
    )
}

export default AvatarPicker
