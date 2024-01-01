import dayjs, { Dayjs } from 'dayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { PickersDay, PickersDayProps } from '@mui/x-date-pickers/PickersDay';
import './Overview.css'

const Calendar = () => {
    const lighlightDays = [1, 2, 5, 8, 10, 11, 12, 13, 14, 15, 18, 19, 21, 23, 25, 26, 27, 29]

    const getRandomInt = (min: number, max: number) => {
        return Math.floor(Math.random() * (max - min + 1)) + min
    }

    const PickerDays = (props: PickersDayProps<Dayjs>) => {
        const { day, ...rest } = props
        const isHighlight = lighlightDays.includes(dayjs(day).date()) && dayjs(day) < dayjs()
        return <PickersDay {...rest} day={day} className={isHighlight ? `highlight-days-${getRandomInt(1, 5)}` : ''} />
    }

    return (
        <div id="calendar">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateCalendar
                    showDaysOutsideCurrentMonth
                    fixedWeekNumber={6}
                    slots={{ day: PickerDays }}
                    sx={{
                        "& .MuiPickersDay-today": {
                            backgroundColor: 'none'
                        }
                    }}
                />
            </LocalizationProvider>
        </div>
    )
}

export default Calendar
