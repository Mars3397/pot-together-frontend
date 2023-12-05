import Avatar1 from 'assets/Avatar1.svg';
import Avatar2 from 'assets/Avatar2.svg';
import Avatar3 from 'assets/Avatar3.svg';
import Avatar4 from 'assets/Avatar4.svg';
import './Room.css'

const colorList = ["#246270", "#63623A", "#8A4F3E", "#36423C"]
const avatarList = [Avatar1, Avatar2, Avatar3, Avatar4]

const Members = () => {
    return (
        <div id="members">
            <div className='members-title'>
                <span>Members</span>
            </div>
            {/* TODO: loop */}
            <div className='members-content'>
                <div className='members-item' style={{ borderColor: colorList[0] }}>
                    <img src={avatarList[0]} alt="Avatar1" className="avatar"/>
                </div>
                <div className='members-item' style={{ borderColor: colorList[1] }}>
                    <img src={avatarList[1]} alt="Avatar2" className="avatar"/>
                </div>
                <div className='members-item' style={{ borderColor: colorList[2] }}>
                    <img src={avatarList[2]} alt="Avatar3" className="avatar"/>
                </div>
                <div className='members-item' style={{ borderColor: colorList[3] }}>
                    <img src={avatarList[3]} alt="Avatar4" className="avatar"/>
                </div>
            </div>
        </div>
    )
}

export default Members