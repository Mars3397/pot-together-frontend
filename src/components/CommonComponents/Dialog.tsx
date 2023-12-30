import { Dialog as MuiDialog } from '@mui/material'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded'

interface DialogProps {
    id: string
    open: boolean
    handleClose: () => void
    children: React.ReactNode
}

const Dialog = (props: DialogProps) => {
    const { id, open, handleClose, children } = props

    return (
        <MuiDialog
            id={id}
            open={open}
            onClose={handleClose}
        >
            <Box
                sx={{
                    width: '20rem',
                    height: '28rem',
                }}
            >
                <IconButton
                    aria-label="close"
                    onClick={handleClose}
                    sx={{
                        position: 'absolute',
                        left: '.5rem',
                        top: '.5rem',
                        color: '#969696',
                        stroke: "#969696",
                        strokeWidth: 1
                    }}
                >
                    <CloseRoundedIcon />
                </IconButton>
                {children}
            </Box>
        </MuiDialog>
    )
}

export default Dialog