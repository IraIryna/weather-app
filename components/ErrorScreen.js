import styles from "./ErrorScreen.module.css";

export const ErrorScreen = ({ errorMessage, children }) => {
  const formattedMessage = errorMessage.replace("tempeture_2m", "temperature_2m");

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.message}>{formattedMessage}</h1>
      {children}
    </div>
  );
};

// Example error object handling
const errorData = {
  error: true,
  reason: "Cannot initialize WeatherVariable from invalid String value tempeture_2m for key hourly"
};

// Usage example
<ErrorScreen errorMessage={errorData.reason} />;