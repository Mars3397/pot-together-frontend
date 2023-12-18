import { useState } from "react"
import { useCreateRoom } from "hooks/useRoom"
import HeaderWithBack from "components/CommonComponents/HeaderWithBack"
import ToggleButton from '@mui/material/ToggleButton'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded'
import "./CreatePot.css"

const CreatePot = () => {
    const createRoomMutation = useCreateRoom()
    const [name, setName] = useState<string | null>(null)
    const [memberLimit, setMemberLimit] = useState<number | null>(null)
    const [privacy, setPrivacy] = useState<'public' | 'private' | null>('private')
    const [category, setCategory] = useState<string[]>(() => [])

    const handlePrivacy = (_event: React.MouseEvent<HTMLElement>, newPrivacy: 'public' | 'private') => {
        setPrivacy(newPrivacy)
    }

    const handleCategory = (_event: React.MouseEvent<HTMLElement>, newCategory: string[]) => {
        setCategory(newCategory)
    }

    const handleCreate = () => {
        if (!name || !memberLimit || !privacy || !category) {
            alert("Please fill in all the fields!")
            return
        }

        createRoomMutation.mutate({
            name: "test",
            memberLimit: memberLimit,
            privacy: privacy,
            category: category.join("|")
        })
    }

    const toggleBtnStyle = {
        color: "#7F84C5",
        backgroundColor: "#F9F9EE",
        "&.MuiButtonBase-root:hover": {
            bgcolor: "#F9F9EE"
        },
        "&.Mui-selected, &.Mui-selected:hover": {
            color: "#F9F9EE",
            backgroundColor: "#7F84C5"
        }
    }

    return (
        <div id="create-pot-page">
            <HeaderWithBack title="Create a New Pot!" />
            <div className="name-container">
                <FavoriteBorderRoundedIcon className="name-icon" />
                <input
                    required
                    type="text"
                    className="name-input"
                    placeholder="Type Your Pot Name"
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div className="member-container">
                <span className="member-title">Members: </span>
                <input
                    required
                    type="number"
                    className="member-input"
                    placeholder="Members Maximum"
                    onChange={(e) => setMemberLimit(parseInt(e.target.value))}
                />
            </div>
            <div className="btns-field-container">
                <span className="title">Privacy: </span>
                <ToggleButtonGroup
                    value={privacy}
                    exclusive
                    onChange={handlePrivacy}
                    aria-label="privacy"
                    className="btns-container"
                >
                    <ToggleButton
                        value="public"
                        aria-label="public pot"
                        className="btn"
                        sx={toggleBtnStyle}
                    >
                        Public
                    </ToggleButton>
                    <ToggleButton
                        value="private"
                        aria-label="private pot"
                        className="btn"
                        sx={toggleBtnStyle}
                    >
                        Private
                    </ToggleButton>
                </ToggleButtonGroup>
            </div>
            <div className="btns-field-container">
                <span className="title">Category: </span>
                <ToggleButtonGroup
                    value={category}
                    onChange={handleCategory}
                    aria-label="category"
                    className="btns-container"
                >
                    <ToggleButton
                        value="college"
                        aria-label="college"
                        className="btn"
                        sx={toggleBtnStyle}
                    >
                        College
                    </ToggleButton>
                    <ToggleButton
                        value="english"
                        aria-label="english"
                        className="btn"
                        sx={toggleBtnStyle}
                    >
                        English
                    </ToggleButton>
                    <ToggleButton
                        value="coding"
                        aria-label="coding"
                        className="btn"
                        sx={toggleBtnStyle}
                    >
                        Coding
                    </ToggleButton>
                    <ToggleButton
                        value="reading"
                        aria-label="reading"
                        className="btn"
                        sx={toggleBtnStyle}
                    >
                        Reading
                    </ToggleButton>
                </ToggleButtonGroup>
            </div>
            <button
                onClick={handleCreate}
                className="create-btn"
            >
                Start Pot
            </button>
        </div>
    )
}

export default CreatePot
