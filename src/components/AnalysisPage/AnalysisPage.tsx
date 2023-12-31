import "./AnalysisPage.css";
import HeaderWithBack from "components/CommonComponents/HeaderWithBack";
import { WeeklyAnalysis, DailyAnalysis } from "./AnalysisTable";
import IngredientList from "./IngredientList";
import Pork from "assets/ingredients/ingredient-4.svg";
import Mushroom from "assets/ingredients/ingredient-0.svg";
import Tofu from "assets/ingredients/ingredient-3.svg";
import Lettuce from "assets/ingredients/ingredient-2.svg";

export const AnalysisPage = () => {
  // Demo data used in weekly analysis
  const dates = Array.from(
    { length: 7 },
    (_, day) => new Date(2023, 11, 23 + day)
  );

  const total_study_times = Array.from({ length: 7 }, () =>
    Math.floor(Math.random() * 86401)
  );
  const last_week_total_study_times = Array.from({ length: 7 }, () =>
    Math.floor(Math.random() * 86401)
  );

  // Demo data used in daily analysis
  const times = Array.from(
    { length: 24 },
    (_, hour) => new Date(2023, 11, 23, hour, 0, 0)
  );

  const todayStudyTimes = Array.from({ length: 24 }, () =>
    Math.floor(Math.random() * 3601)
  );
  const yesterdayStudyTime = Array.from({ length: 24 }, () =>
    Math.floor(Math.random() * 3601)
  );

  // Demo data used in ingredient list
  const cookedToday = [
    { name: "Pork", count: 1, icon: Pork },
    { name: "Mushroom", count: 2, icon: Mushroom },
  ];

  const cookedYesterday = [
    { name: "Tofu", count: 3, icon: Tofu },
    { name: "Lettuce", count: 2, icon: Lettuce },
  ];

  return (
    <div id="analysis-page">
      <HeaderWithBack title="Analysis Report" />
      <WeeklyAnalysis
        dates={dates}
        currentStudyTimes={total_study_times}
        previousStudyTime={last_week_total_study_times}
      />
      <DailyAnalysis
        times={times}
        currentStudyTimes={todayStudyTimes}
        previousStudyTime={yesterdayStudyTime}
      />

      <IngredientList
        title="Today I Cooked..."
        borderColor="#BABEF4"
        ingredients={cookedToday}
      />
      <IngredientList
        title="Trash Can"
        borderColor="#8F8F8F"
        ingredients={cookedYesterday}
      />
    </div>
  );
};

export default AnalysisPage;
