import dayjs from 'dayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import './Overview.css'

const Calendar = () => {
    return (
        <div id="calendar">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateCalendar
                    defaultValue={dayjs()}
                    showDaysOutsideCurrentMonth
                    fixedWeekNumber={6}
                />
            </LocalizationProvider>
        </div>
    )
}

export default Calendar
