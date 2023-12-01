import { useParams } from 'react-router-dom'
import Header from 'CommonComponents/header'
import './Room.css'

const Room = () => {
    const { roomId } = useParams()

    return (
        <div id="room">
            {/* Room name should be retrived from API data (handle later) */}
            <Header title={String(roomId)} /> 
            <div className='content'>
                <p>content</p>
            </div>
        </div>
    )
}

export default Room