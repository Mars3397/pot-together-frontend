import "./AnalysisPage.css";
import { BarChart, DEFAULT_X_AXIS_KEY } from "@mui/x-charts";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

interface WeeklyAnalysisProps {
  dates: Array<Date>;
  currentStudyTimes: Array<number>;
  previousStudyTime: Array<number>;
}

interface AnalysisTableProps {
  dateText: string;
  timeText: string;
  studyTimeComparison: JSX.Element;
  data: Array<number>;
  xAxisLabels: Array<string>;
}

interface DailyAnalysisProps {
  times: Array<Date>;
  currentStudyTimes: Array<number>;
  previousStudyTime: Array<number>;
}

const AnalysisTable = (props: AnalysisTableProps) => {
  const { dateText, timeText, studyTimeComparison, data, xAxisLabels } = props;

  const formatStudyTime = (value: number) => {
    const hour = Math.floor(value / 3600);
    const minute = Math.floor((value % 3600) / 60);

    return hour === 0 ? `${minute}m` : `${hour}h ${minute}m`;
  };

  return (
    <div className="weekly-analysis">
      <div className="analysis-title">
        <span className="analysis-title-text">{}</span>
      </div>
      <div className="analysis-content">
        <div className="date">
          <span className="date-text">{dateText}</span>
        </div>
        <div className="time">
          <span className="time-text">{timeText}</span>
          {studyTimeComparison}
        </div>
        <BarChart
          leftAxis={null}
          // tooltip={{ trigger: 'none' }}
          xAxis={[
            {
              scaleType: "band",
              data: xAxisLabels,
            },
          ]}
          series={[
            {
              data: data,
              valueFormatter: formatStudyTime,
            },
          ]}
          width={320}
          height={180}
          margin={{
            left: 10,
            right: 20,
            top: 30,
            bottom: 30,
          }}
          colors={["#7D7D2D"]}
        />
      </div>
    </div>
  );
};

export const WeeklyAnalysis = (props: WeeklyAnalysisProps) => {
  const { dates, currentStudyTimes, previousStudyTime } = props;

  const convertDateToDayName = (date: Date) => {
    const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return dayNames[date.getDay()];
  };

  const formatDate = (date: Date) => {
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${month}/${day}`;
  };

  const calculateAverage = (study_times: Array<number>) => {
    const sum = study_times.reduce((a, b) => a + b, 0);
    return sum / study_times.length;
  };

  const formatStudyTime = (study_time: number) => {
    const hour = Math.floor(study_time / 3600);
    const minute = Math.floor((study_time % 3600) / 60);

    return hour === 0 ? `${minute}m` : `${hour}h ${minute}m`;
  };

  const getStudyTimeComparisonResult = (
    lastWeek: Array<number>,
    thisWeek: Array<number>
  ) => {
    const lastWeekAverage = calculateAverage(lastWeek);
    const thisWeekAverage = calculateAverage(thisWeek);
    const difference = thisWeekAverage - lastWeekAverage;

    const resultText = `${Math.floor(
      (100 * difference) / lastWeekAverage
    )}% from last week.`;

    let color;
    let icon;
    if (difference >= 0) {
      color = "#7D7D2D";
      icon = <ArrowUpwardIcon style={{ width: "1rem", height: "auto" }} />;
    } else {
      color = "#D0694B";
      icon = <ArrowDownwardIcon style={{ width: "1rem", height: "auto" }} />;
    }

    return (
      <div className="study-time-comparison" style={{ color: color }}>
        {icon}
        <span>{resultText}</span>
      </div>
    );
  };
  const dateText = `${formatDate(dates[0])}-${formatDate(
    dates[dates.length - 1]
  )} Daily Average:`;
  const timeText = `${formatStudyTime(calculateAverage(currentStudyTimes))}`;
  const studyTimeComparison = getStudyTimeComparisonResult(
    previousStudyTime,
    currentStudyTimes
  );
  const xAxisLabels = dates.map((date) => convertDateToDayName(date));

  return (
    <AnalysisTable
      dateText={dateText}
      timeText={timeText}
      studyTimeComparison={studyTimeComparison}
      xAxisLabels={xAxisLabels}
      data={currentStudyTimes}
    />
  );
};

export const DailyAnalysis = (props: DailyAnalysisProps) => {
  const { times, currentStudyTimes, previousStudyTime } = props;

  function ConvertTimeToAMPM(date: Date) {
    let hours = date.getHours();
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    const strTime = `${hours}${ampm}`;
    return strTime;
  }

  const calculateTotal = (study_times: Array<number>) => {
    const sum = study_times.reduce((a, b) => a + b, 0);
    return sum;
  };

  const formatStudyTime = (study_time: number) => {
    const hour = Math.floor(study_time / 3600);
    const minute = Math.floor((study_time % 3600) / 60);

    return hour === 0 ? `${minute}m` : `${hour}h ${minute}m`;
  };

  const getStudyTimeComparisonResult = (
    yesterday: Array<number>,
    today: Array<number>
  ) => {
    const yesterdayTotal = calculateTotal(yesterday);
    const todayTotal = calculateTotal(today);
    const difference = todayTotal - yesterdayTotal;

    const resultText = `${Math.floor(
      (100 * difference) / yesterdayTotal
    )}% from yesterday.`;

    let color;
    let icon;
    if (difference >= 0) {
      color = "#7D7D2D";
      icon = <ArrowUpwardIcon style={{ width: "1rem", height: "auto" }} />;
    } else {
      color = "#D0694B";
      icon = <ArrowDownwardIcon style={{ width: "1rem", height: "auto" }} />;
    }

    return (
      <div className="study-time-comparison" style={{ color: color }}>
        {icon}
        <span>{resultText}</span>
      </div>
    );
  };
  const dateText = "Today:";
  const timeText = `${formatStudyTime(calculateTotal(currentStudyTimes))}`;
  const studyTimeComparison = getStudyTimeComparisonResult(
    previousStudyTime,
    currentStudyTimes
  );
  const xAxisLabels = times.map((time) => ConvertTimeToAMPM(time));

  return (
    <AnalysisTable
      dateText={dateText}
      timeText={timeText}
      studyTimeComparison={studyTimeComparison}
      xAxisLabels={xAxisLabels}
      data={currentStudyTimes}
    />
  );
};
