import { useState } from "react"
import HeaderWithBack from "components/CommonComponents/HeaderWithBack"
import { InputAdornment, TextField } from "@mui/material"
import SearchRoundedIcon from '@mui/icons-material/SearchRounded'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded'
import "./SearchPot.css"

const SearchPot = () => {
    const [search, setSearch] = useState("")
    const [filterCategory, setFilterCategory] = useState<string[]>([])

    const potList = [
        {
            id: 0,
            name: "Welcome!",
            category: "Coding",
            currentMember: 5,
            maxMember: 10,
        },
        {
            id: 1,
            name: "Public Pot",
            category: "English",
            currentMember: 8,
            maxMember: 15,
        },
        {
            id: 2,
            name: "3hr/day",
            category: "College",
            currentMember: 11,
            maxMember: 15,
        },
        {
            id: 3,
            name: "Reading...",
            category: "Reading",
            currentMember: 3,
            maxMember: 10,
        }
    ]

    const filteredPotList = () => {
        return potList.filter((pot) => {
            return pot.name.toLowerCase().includes(search.toLowerCase()) && (filterCategory.length === 0 || filterCategory.includes(pot.category))
        })
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
                    startAdornment: (
                        <InputAdornment
                            position="start"
                            className="input-field-icon"
                        >
                            <SearchRoundedIcon sx={{
                                color: '#BABEF4',
                                stroke: "#BABEF4",
                                strokeWidth: 1
                            }} />
                        </InputAdornment>
                    ),
                    endAdornment: (
                        <InputAdornment
                            position="end"
                            className="input-field-icon"
                            onClick={() => setSearch("")}
                        >
                            <CloseRoundedIcon
                                sx={{
                                    color: '#BABEF4',
                                    stroke: "#BABEF4",
                                    strokeWidth: 1
                                }} />
                        </InputAdornment>
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
                <button
                    className="filter-btn"
                    onClick={handleFilterBtnClick}
                >
                    College
                </button>
                <button
                    className="filter-btn"
                    onClick={handleFilterBtnClick}
                >
                    English
                </button>
                <button
                    className="filter-btn"
                    onClick={handleFilterBtnClick}
                >
                    Coding
                </button>
                <button
                    className="filter-btn"
                    onClick={handleFilterBtnClick}
                >
                    Reading
                </button>
            </div>
            <div className="pot-list">
                {filteredPotList().map((pot) => (
                    <div className="pot" key={pot.id}>
                        <div className="pot-name">{pot.name}</div>
                        <div className="pot-member">{pot.currentMember}/{pot.maxMember}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SearchPot
