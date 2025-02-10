import styles from "@/Styles/DailyWeather.module.scss";

import { HourlyWheather } from "./Hourly";

type DailyWheatherProps = {
  data: DailyWeatherType[];
  date: string;
};

export function DailyWheather({ data, date }: DailyWheatherProps) {
  const weekDay = new Date(Date.parse(date))
    .toLocaleDateString("ru-Ru", {
      weekday: "long",
      year: undefined,
      month: "long",
      day: "numeric",
    })
    .replace(/^./, (char) => char.toUpperCase());
  return (
    <div className="container">
      <p className="fs-4 ">{weekDay}</p>
      <div className={`${styles.dailyCont}`}>
        {data.map((d) => {
          return <HourlyWheather key={d.dt_txt} data={d} />;
        })}
      </div>
    </div>
  );
}
