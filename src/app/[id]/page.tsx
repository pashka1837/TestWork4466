import styles from "@/styles/Base.module.scss";

import { fetchDaily } from "./action";
import { DailyWheather } from "./components/Daily";

export default async function CityPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const cityName = (await params).id;
  const res = await fetchDaily(cityName);
  if (res.errorMsg)
    return (
      <div
        className={`${styles.outer} container-fluid p-2 p-3 p-lg-4 d-flextext-center`}
      >
        <h4>{res.errorMsg}</h4>
      </div>
    );
  const data: DailyDataType = {};
  res.data?.list.forEach((w) => {
    const date = w.dt_txt.split(" ").at(0) || "";
    if (data[date]) data[date].push(w);
    else {
      data[date] = [];
      data[date].push(w);
    }
  });
  return (
    <div
      className={`${styles.outer} container-fluid p-2 p-3 p-lg-4 d-flex flex-column gap-5 align-items-center`}
    >
      <p className="fs-3 fw-bold">{res.data?.city.name}</p>
      {Object.entries(data).map(([date, weather]) => {
        return <DailyWheather key={date} date={date} data={weather} />;
      })}
    </div>
  );
}
