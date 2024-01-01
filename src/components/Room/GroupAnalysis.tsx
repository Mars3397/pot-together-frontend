import { BarChart } from '@mui/x-charts/BarChart'
import './Room.css'

interface GroupAnalysisProps {
    duration: number,
    targetYear: number,
    targetMonth: number,
    targetDay: number
}

const colorList = ["#36423C", "#D2D000"]

function calculatePreviousSevenDays(targetYear: number, targetMonth: number, targetDay: number) {
    // Create a Date object for the target date
    const targetDate = new Date(targetYear, targetMonth - 1, targetDay);

    // Calculate the previous seven days
    const previousDays = [];
    for (let i = 6; i >= 0; i--) {
        const date = new Date(targetDate);
        date.setDate(targetDate.getDate() - i);
        // Use template literals to format MM/DD
        const formattedDate = `${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getDate().toString().padStart(2, '0')}`;
        previousDays.push(formattedDate);
    }
    return previousDays;
}


function GroupAnalysis(props: GroupAnalysisProps) {
    const { duration, targetYear, targetMonth, targetDay } = props
    const previousDays = calculatePreviousSevenDays(targetYear, targetMonth, targetDay)
    return (
        <div id='group-analysis'>
            <div className='group-analysis-content'>
                <div className='group-analysis-title'>
                    <span className='group-analysis-title-text'>{duration}&nbsp;hr</span>
                    <span className='group-analysis-title-date'>{previousDays[0]} ~ {previousDays[6]}</span>
                </div>
                <BarChart 
                    leftAxis={null}
                    bottomAxis={null}
                    xAxis={[{ scaleType: 'band', data: previousDays }]}
                    series={[{ data: [4, 8, 5, 7, 2, 5, 3], color: colorList[0]}, { data: [15, 13, 34, 14, 34, 28, 12], color: colorList[1] }]}
                    width={320}
                    height={100}
                    margin={{
                        left: 10,
                        right: 20,
                        top: 20,
                        bottom: 20,
                    }}
                />
            </div>
        </div>
    );
}

export default GroupAnalysis
