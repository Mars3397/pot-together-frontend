import { useState } from 'react'
import Menu from './Menu'
import IconButton from '@mui/material/IconButton'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded'
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded'
import './Header.css'

interface HeaderProps {
    title: string
}

const Header = (props: HeaderProps) => {
    const { title } = props

    const [openMenu, setOpenMenu] = useState(false)

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
            <IconButton aria-label="setting">
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
