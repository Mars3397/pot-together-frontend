import { useNavigate } from "react-router-dom"
import IconButton from "@mui/material/IconButton"
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded'
import "./HeaderWithBack.css"

interface HeaderWithBackProps {
    title: string
}

const HeaderWithBack = ({ title }: HeaderWithBackProps) => {
    const navigate = useNavigate()

    return (
        <div id="header-with-back">
            <IconButton
                className="back-btn"
                onClick={() => navigate(-1)}
            >
                <ArrowBackIosRoundedIcon
                    sx={{
                        color: '#000',
                        stroke: "#000",
                        strokeWidth: 1
                    }}
                />
            </IconButton>
            <span className="title">{title}</span>
        </div>
    )
}

export default HeaderWithBack