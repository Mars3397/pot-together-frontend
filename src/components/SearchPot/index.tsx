import { useState } from "react"
import HeaderWithBack from "components/CommonComponents/HeaderWithBack"
import Dialog from "components/CommonComponents/Dialog"
import { InputAdornment, TextField } from "@mui/material"
import SearchRoundedIcon from '@mui/icons-material/SearchRounded'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded'
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded'
import "./SearchPot.css"

interface PotInfo {
    id: number
    name: string
    category: string[]
    currentMember: number
    maxMember: number
}

const SearchPot = () => {
    const [search, setSearch] = useState("")
    const [filterCategory, setFilterCategory] = useState<string[]>([])
    const [openDialog, setOpenDialog] = useState(false)
    const [selectedPot, setSelectedPot] = useState<PotInfo | null>(null)

    const categories = ["College", "English", "Coding", "Reading"]

    const potList: PotInfo[] = [
        {
            id: 0,
            name: "Welcome!",
            category: ["College", "Coding"],
            currentMember: 5,
            maxMember: 10,
        },
        {
            id: 1,
            name: "Public Pot",
            category: ["English"],
            currentMember: 8,
            maxMember: 15,
        },
        {
            id: 2,
            name: "3hr/day",
            category: ["College"],
            currentMember: 11,
            maxMember: 15,
        },
        {
            id: 3,
            name: "Reading...",
            category: ["Reading", "English"],
            currentMember: 3,
            maxMember: 10,
        }
    ]

    const filteredPotList = () => {
        if (search === "") {
            return potList.filter((pot) => {
                if (filterCategory.length === 0) {
                    return true
                } else {
                    return filterCategory.some((category) => pot.category.includes(category))
                }
            })
        } else {
            return potList.filter((pot) => {
                if (filterCategory.length === 0) {
                    return pot.name.toLowerCase().includes(search.toLowerCase())
                } else {
                    return filterCategory.some((category) => pot.category.includes(category))
                        && pot.name.toLowerCase().includes(search.toLowerCase())
                }
            })
        }
    }

    const handleFilterBtnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        const btn = e.currentTarget
        if (btn.classList.contains("filter-btn-active")) {
            btn.classList.remove("filter-btn-active")
            setFilterCategory(filterCategory.filter((category) => category !== btn.innerText))
        } else {
            btn.classList.add("filter-btn-active")
            setFilterCategory([...filterCategory, btn.innerText])
        }
    }

    const handlePotClick = (pot: PotInfo) => {
        setSelectedPot(pot)
        setOpenDialog(true)
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value)
    }

    return (
        <div id="search-pot">
            <HeaderWithBack title="Join a Public Pot!" />
            <TextField
                variant="outlined"
                placeholder="Search..."
                type="text"
                value={search}
                onChange={handleChange}
                className="input-field"
                margin="normal"
                InputProps={{
                    startAdornment: <Adornment position="start" />,
                    endAdornment: (
                        <Adornment
                            position="end"
                            onClick={() => setSearch("")}
                        />
                    ),
                }}
                inputProps={{
                    sx: {
                        color: "#BABEF4",
                        fontFamily: "Jua",
                        letterSpacing: "0.5px",

                        "&::placeholder": {
                            color: "#BABEF4",
                            opacity: 1,
                            fontSize: "20px",
                            letterSpacing: "1.5px",
                        },
                        "&:focus::placeholder": {
                            color: "#BABEF4",
                            opacity: 0.3,
                        },
                    },
                }}
                sx={{
                    "& fieldset": { border: "none" },
                }}
            />
            <div className="filter-btns">
                {categories.map((category) => (
                    <button
                        key={category}
                        className="filter-btn"
                        onClick={handleFilterBtnClick}
                    >
                        {category}
                    </button>
                ))}
            </div>
            <div className="pot-list">
                {filteredPotList().map((pot) => (
                    <div
                        key={pot.id}
                        className="pot"
                        onClick={() => handlePotClick(pot)}
                    >
                        <div className="pot-name">{pot.name}</div>
                        <div className="pot-member">{pot.currentMember}/{pot.maxMember}</div>
                    </div>
                ))}
            </div>
            <Dialog
                id='search-pot-dialog'
                open={openDialog}
                handleClose={() => setOpenDialog(false)}
            >
                <div className="dialog-container">
                    <div className="dialog-header">Pot Info</div>
                    <div className="name-container">
                        <FavoriteBorderRoundedIcon className="name-icon" />
                        <span className="pot-name">{selectedPot?.name}</span>
                    </div>
                    <div className="category-container">
                        {selectedPot?.category.map((category) => (
                            <div key={category} className="category">
                                {category}
                            </div>
                        ))}
                    </div>
                    <span className="members">
                        Members: {selectedPot?.currentMember}/{selectedPot?.maxMember}
                    </span>
                    <button className="join-btn">Join Pot</button>
                </div>
            </Dialog>
        </div>
    )
}

export default SearchPot

interface AdornmentProps {
    position: 'start' | 'end',
    onClick?: () => void
}

const Adornment = (props: AdornmentProps) => {
    const { position, onClick } = props

    return (
        <InputAdornment
            position={position}
            className="input-field-icon"
            onClick={onClick}
        >
            {position === 'start' ? (
                <SearchRoundedIcon
                    sx={{
                        color: '#BABEF4',
                        stroke: "#BABEF4",
                        strokeWidth: 1
                    }} />
            ) : (
                <CloseRoundedIcon
                    sx={{
                        color: '#BABEF4',
                        stroke: "#BABEF4",
                        strokeWidth: 1
                    }} />
            )}
        </InputAdornment>
    )
}
