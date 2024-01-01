import { BarChart } from '@mui/x-charts/BarChart'
import './Overview.css'

const Analysis = () => {
    const todayDateString = new Date().toLocaleDateString()

    const lastWeekDateString = [
        new Date(new Date().setDate(new Date().getDate() - 6)).toLocaleDateString(),
        new Date(new Date().setDate(new Date().getDate() - 5)).toLocaleDateString(),
        new Date(new Date().setDate(new Date().getDate() - 4)).toLocaleDateString(),
        new Date(new Date().setDate(new Date().getDate() - 3)).toLocaleDateString(),
        new Date(new Date().setDate(new Date().getDate() - 2)).toLocaleDateString(),
        new Date(new Date().setDate(new Date().getDate() - 1)).toLocaleDateString(),
        new Date().toLocaleDateString(),
    ]

    console.log(todayDateString.substring(5, todayDateString.length))

    return (
        <div id='analysis'>
            <div className='analysis-title'>
                <span className='analysis-title-text'>Insights</span>
            </div>
            <div className='analysis-content'>
                <div className='date'>
                    <span className='date-text'>
                        {todayDateString.substring(5, todayDateString.length)}
                    </span>
                </div>
                <div className='time'>
                    <span className='time-text'>3:50:00</span>
                </div>
                <BarChart
                    leftAxis={null}
                    bottomAxis={null}
                    // tooltip={{ trigger: 'none' }}
                    xAxis={[{
                        scaleType: 'band',
                        data: lastWeekDateString,
                    }]}
                    series={[
                        { data: [2, 3, 4, 5, 6, 1, 0], stack: 'A' },
                        { data: [0, 0, 0, 0, 0, 0, 3], stack: 'A' },
                    ]}
                    width={320}
                    height={180}
                    margin={{
                        left: 10,
                        right: 20,
                        top: 20,
                        bottom: 20,
                    }}
                    colors={
                        ['#FFCDBE', '#EF7754']
                    }
                />
            </div>
        </div>
    )
}

export default Analysis
