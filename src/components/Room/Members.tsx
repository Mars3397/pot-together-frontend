import Avatar1 from 'assets/Avatar1.svg';
import Avatar2 from 'assets/Avatar2.svg';
import Avatar3 from 'assets/Avatar3.svg';
import Avatar4 from 'assets/Avatar4.svg';
import Dialog from 'components/CommonComponents/Dialog';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded'
import './Room.css'
import { useEffect, useState } from 'react';
import { MemberInfo } from 'api';
import { useGetProfile } from 'hooks/useUser';
import { formatTime } from 'utils';

const colorList = ["#246270", "#63623A", "#8A4F3E", "#36423C"]
const avatarList = [Avatar1, Avatar2, Avatar3, Avatar4]

interface MembersProps {
    memberInfo: MemberInfo[]
}

const Members = (props: MembersProps) => {
    const { memberInfo } = props

    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState<MemberInfo | null>(null)

    const {
        data: profile,
        refetch: refetchProfile,
    } = useGetProfile(selected?.userID || 1)

    useEffect(() => {
        refetchProfile()
    }, [selected])

    const handleClickOpen = (member: MemberInfo) => {
        setOpen(true);
        setSelected(member);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div id="members">
            <div className='members-title'>
                <span>Members</span>
            </div>
            <div className='members-content'>
                {memberInfo.map((member, index) => (
                    <div className='members-item' style={{ borderColor: colorList[index] }} onClick={() => handleClickOpen(member)}>
                        <img src={avatarList[member.avatar]} alt="Avatar" className="avatar" />
                    </div>
                ))}
            </div>

            <Dialog
                id="member-dialog"
                open={open}
                handleClose={handleClose}
            >
                <div className="dialog-container">
                    <div className="dialog-header">Member Info</div>
                    <div className="name-container">
                        <FavoriteBorderRoundedIcon className="name-icon" />
                        <span className="pot-name">{profile?.data.name}</span>
                    </div>
                    <div className='total-cooking-time'>
                        <div className='text'>Cooking Time:</div>
                        <div className='time'>{formatTime(profile?.data.cookingTime || 0)}</div>
                    </div>
                    <div className='more-info'>
                        #Status: {profile?.data.status.code === 0 ? "Cooking" : "Done"} {profile?.data.status.ingredient}
                    </div>
                    <div className='more-info'>
                        #Done: {
                            profile?.data.done && profile?.data.done.map((ingredient, index) => (
                                <span key={index}>{ingredient} </span>
                            ))
                        }
                    </div>
                </div>
            </Dialog>
        </div>
    )
}

export default Members