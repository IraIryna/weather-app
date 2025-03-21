import { getWeekDay, getTime, getAMPM } from "../services/helpers";
import styles from "./DateAndTime.module.css";

export const DateAndTime = ({ weatherData, unitSystem, refreshData }) => {
  useEffect(() => {
    const interval = setInterval(() => {
      refreshData();
    }, 3600000); // Refresh every hour

    return () => clearInterval(interval);
  }, [refreshData]);
  return (
    <div className={styles.wrapper}>
      <h2>
        {`${getWeekDay(weatherData)}, ${getTime(
          unitSystem,
          weatherData.dt,
          weatherData.timezone
        )} ${getAMPM(unitSystem, weatherData.dt, weatherData.timezone)}`}
      </h2>
    </div>
  );
};
