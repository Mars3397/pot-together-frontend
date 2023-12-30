import MenuItem from "./MenuItem"
import { SimpleRoomInfo } from "api"
import Drawer from "@mui/material/Drawer"
import AddRoundedIcon from '@mui/icons-material/AddRounded'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded'

interface MenuProps {
    roomData: SimpleRoomInfo[]
    openMenu: boolean
    setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>
}

const Menu = (props: MenuProps) => {
    const { openMenu, setOpenMenu, roomData } = props

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
                    roomData.map((item, index) => (
                        <MenuItem
                            key={index}
                            name={item.name}
                            classN='item'
                            link={'/room/' + item.roomID}
                            setOpenMenu={setOpenMenu}
                            info={
                                <span className='itemSpan'>
                                    {item.memberCount}/{item.memberLimit}
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
