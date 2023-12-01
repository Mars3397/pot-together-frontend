import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import IconButton from '@mui/material/IconButton'
import Drawer from '@mui/material/Drawer'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded'
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded'
import AddRoundedIcon from '@mui/icons-material/AddRounded'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded'
import { MenuItem } from './interfaces'
import './common.css'

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

interface MenuProps {
    openMenu: boolean
    setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>
}

const Menu = (props: MenuProps) => {
    const { openMenu, setOpenMenu } = props

    const menuItems: MenuItem[] = [
        {
            id: '1',
            name: 'My Pot',
            online: 5,
            total: 5
        },
        {
            id: '2',
            name: 'TOFEL',
            online: 1,
            total: 1
        },
        {
            id: '3',
            name: 'Settings',
            online: 3,
            total: 3
        }
    ]

    return (
        <Drawer
            anchor='left'
            open={openMenu}
            onClose={() => setOpenMenu(false)}
        >
            <div id="menu">
                <div className='title'>Let's Pot Together!</div>
                <Item name='Overview' setOpenMenu={setOpenMenu} />
                {
                    menuItems.map((item, index) => (
                        <Item
                            key={index}
                            name={item.name}
                            id={item.id}
                            online={item.online}
                            total={item.total}
                            setOpenMenu={setOpenMenu}
                        />
                    ))
                }
                <Item name='Create Pot' setOpenMenu={setOpenMenu} />
                <Item name='Search Pot' setOpenMenu={setOpenMenu} />
            </div>
        </Drawer>
    )
}

interface ItemProps {
    name: string
    id?: string
    online?: number
    total?: number
    setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>
}

const Item = (props: ItemProps) => {
    const { name, id, online, total, setOpenMenu } = props

    return (
        <div
            onClick={() => setOpenMenu(false)}
            className={
                name === 'Overview' ? 'itemO' :
                    name === 'Create Pot' ? 'itemP' :
                        name === 'Search Pot' ? 'itemP' :
                            'item'
            }
        >
            <Link
                className='link'
                to={
                    name === 'Overview' ? '/' :
                        name === 'Create Pot' ? '/CreatePot' :
                            name === 'Search Pot' ? '/SearchPot' :
                                '/room/' + id
                }
            >
                <span className='itemSpan'>{name}</span>
                {
                    name === 'Overview' ? (
                        null
                    ) : name === 'Create Pot' ? (
                        <AddRoundedIcon
                            className='itemIcon'
                            sx={{ stroke: "#000000", strokeWidth: 1 }}
                        />
                    ) : name === 'Search Pot' ? (
                        <SearchRoundedIcon
                            className='itemIcon'
                            sx={{ stroke: "#000000", strokeWidth: 1 }}
                        />
                    ) : (
                        <span className='itemSpan'>
                            {online}/{total}
                        </span>
                    )
                }
            </Link>

        </div>
    )
}
