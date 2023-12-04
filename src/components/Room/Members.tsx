import Avatar1 from 'assets/Avatar1.svg';
import Avatar2 from 'assets/Avatar2.svg';
import Avatar3 from 'assets/Avatar3.svg';
import Avatar4 from 'assets/Avatar4.svg';
import './Room.css'

// interface MembersProps {
//     group: string
// }

const Members = () => {
    return (
        <div id="members">
            <div className='members-title'>
                <span>Members</span>
            </div>
            {/* TODO: loop */}
            <div className='members-content'>
                <div className='members-item'>
                    <img src={Avatar1} alt="Avatar1" className="avatar"/>
                </div>
                <div className='members-item'>
                    <img src={Avatar2} alt="Avatar2" className="avatar"/>
                </div>
                <div className='members-item'>
                    <img src={Avatar3} alt="Avatar3" className="avatar"/>
                </div>
                <div className='members-item'>
                    <img src={Avatar4} alt="Avatar4" className="avatar"/>
                </div>
            </div>
        </div>
    )
}

export default Members