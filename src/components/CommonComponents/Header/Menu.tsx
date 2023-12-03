import Drawer from "@mui/material/Drawer"
import MenuItem from "./MenuItem"
import AddRoundedIcon from '@mui/icons-material/AddRounded'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded'

interface MenuProps {
    openMenu: boolean
    setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>
}

const Menu = (props: MenuProps) => {
    const { openMenu, setOpenMenu } = props

    const menuItems = [
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
                <MenuItem
                    name='Overview'
                    classN='itemO'
                    link='/'
                    setOpenMenu={setOpenMenu}
                />
                {
                    menuItems.map((item, index) => (
                        <MenuItem
                            key={index}
                            name={item.name}
                            classN='item'
                            link={'/room/' + item.id}
                            setOpenMenu={setOpenMenu}
                            info={
                                <span className='itemSpan'>
                                    {item.online}/{item.total}
                                </span>
                            }
                        />
                    ))
                }
                <MenuItem
                    name='Create Pot'
                    classN='itemP'
                    link='/CreatePot'
                    setOpenMenu={setOpenMenu}
                    info={
                        <AddRoundedIcon
                            className='itemIcon'
                            sx={{ stroke: "#000000", strokeWidth: 1 }}
                        />
                    }
                />
                <MenuItem
                    name='Search Pot'
                    classN='itemP'
                    link='/SearchPot'
                    setOpenMenu={setOpenMenu}
                    info={
                        <SearchRoundedIcon
                            className='itemIcon'
                            sx={{ stroke: "#000000", strokeWidth: 1 }}
                        />
                    }
                />
            </div>
        </Drawer>
    )
}

export default Menu
