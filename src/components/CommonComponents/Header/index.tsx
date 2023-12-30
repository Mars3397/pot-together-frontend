import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Menu from './Menu'
import { SimpleRoomInfo } from 'api'
import IconButton from '@mui/material/IconButton'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded'
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded'
import './Header.css'

interface HeaderProps {
    title: string

    roomData: SimpleRoomInfo[]
}

const Header = (props: HeaderProps) => {
    const { title, roomData } = props
    const [openMenu, setOpenMenu] = useState(false)
    const navigate = useNavigate();

    const handleSettingClick = () => {
        const roomId = roomData[0].roomID;
        navigate(`/room/setting/${roomId}`);
    }

    return (
        <div id="header">
            <IconButton
                aria-label="menu"
                onClick={() => setOpenMenu(true)}
            >
                <MenuRoundedIcon
                    fontSize="large"
                    sx={{
                        color: '#969696',
                        stroke: "#969696",
                        strokeWidth: 1
                    }}
                />
            </IconButton>
            <Menu
                roomData={roomData}
                openMenu={openMenu}
                setOpenMenu={setOpenMenu}
            />
            <span className='headerTitle'>
                {title}
            </span>
            <IconButton aria-label="setting" onClick={handleSettingClick}>
                <SettingsRoundedIcon
                    fontSize="large"
                    sx={{
                        color: '#969696',
                        stroke: "#969696",
                        strokeWidth: 1
                    }}
                />
            </IconButton>
        </div>
    )
}

export default Header
