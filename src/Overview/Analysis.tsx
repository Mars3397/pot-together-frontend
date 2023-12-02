import { BarChart } from '@mui/x-charts/BarChart'
import './Overview.css'

const Analysis = () => {
    return (
        <div id='analysis'>
            <div className='analysis-title'>
                <span className='analysis-title-text'>Insights</span>
            </div>
            <div className='analysis-content'>
                <div className='date'>
                    <span className='date-text'>11/19</span>
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
                        data: ['12/1', '12/2', '12/3', '12/4', '12/5', '12/6', '12/7'],
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
