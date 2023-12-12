import AvatarFrame from 'assets/avatar-frame.svg';
import Avatar0 from 'assets/avatars/avatar-0.svg';
import AvatarPickerBackground from 'assets/avatar-picker-background.svg';
import './SignUp.css';

interface AvatarPickerProps {
    setShowPopup: (value: boolean) => void;
}

const AvatarPicker = (props: AvatarPickerProps) => {
    const { setShowPopup } = props;

    return (
        <div className="avatar-picker">
            <div className="avatar-wrapper">
                <img className="avatar-frame" src={AvatarFrame} alt="" />
                <img className="avatar-picker-background" src={AvatarPickerBackground} alt="" />
                <img className="avatar-icon" src={Avatar0} alt="" onClick={() => { setShowPopup(true) }} style={{ cursor: 'pointer' }} />
            </div>
            <div className="avatar-label">Avatar</div>
        </div>
    )
}

export default AvatarPicker
