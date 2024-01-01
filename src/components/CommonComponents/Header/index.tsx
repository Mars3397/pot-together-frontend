import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Menu from './Menu'
import Dialog from '../Dialog'
import { SimpleRoomInfo } from 'api'
import IconButton from '@mui/material/IconButton'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded'
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded'
import Mushrooms from 'assets/Mushrooms.svg'
import './Header.css'

interface HeaderProps {
    title: string
    roomData: SimpleRoomInfo[]
    roomID?: number
    isOverview?: boolean
}

const Header = (props: HeaderProps) => {
    const { title, roomData, roomID, isOverview } = props
    const navigate = useNavigate();

    const [openMenu, setOpenMenu] = useState(false)
    const [openLevel, setOpenLevel] = useState(false)

    const handleLevelClick = () => {
        setOpenLevel(true)
    }

    const handleLevelClose = () => {
        setOpenLevel(false)
    }

    const handleSettingClick = () => {
        navigate(`/room/setting/${roomID || 0}`);
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
            {isOverview ? (
                <>
                    <div id='level-btn' onClick={handleLevelClick}>
                        <span>15</span>
                    </div>
                    <Dialog
                        id='level-dialog'
                        open={openLevel}
                        handleClose={handleLevelClose}
                    >
                        <div className="dialog-container">
                            <div className="dialog-header">Level Info</div>
                            <div className='progress-bar' />
                            <div className='total-cooking-time'>
                                <div className='text'>Total Cooking Time:</div>
                                <div className='time'>33:10</div>
                            </div>
                            <div className='next-level-info'>
                                <span># Time Until lv.16: </span>
                                <span className='value'>01:20</span>
                            </div>
                            <div className='next-level-info'>
                                <span># Unlock at lv.16: </span>
                                <span className='value'>Mushroom</span>
                                <img src={Mushrooms} alt="Mushrooms" className='image' />
                            </div>
                        </div>
                    </Dialog>
                </>
            ) : (
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
            )}
        </div>
    )
}

export default Header
