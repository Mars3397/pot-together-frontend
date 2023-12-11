import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Menu from './Menu'
import IconButton from '@mui/material/IconButton'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded'
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded'
import './Header.css'

interface HeaderProps {
    title: string
    roomId?: number
}

const Header = (props: HeaderProps) => {
    const { title, roomId } = props
    const navigate = useNavigate()

    const [openMenu, setOpenMenu] = useState(false)

    const handleSettingClick = () => {
        navigate(`/setting/${roomId}`)
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
