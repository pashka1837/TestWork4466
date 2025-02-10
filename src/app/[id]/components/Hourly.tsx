import Image from "next/image";

const imgUrl = process.env.NEXT_PUBLIC_IMG_URL;

type HourlyWheatherProps = {
  data: DailyWeatherType;
};

export function HourlyWheather({ data }: HourlyWheatherProps) {
  return (
    <div
      className="d-flex flex-row-reverse flex-sm-column align-items-center
     border border-primary p-3"
    >
      <p className="fs-5 mb-0 text-primary d-none d-sm-block">
        {data.dt_txt.split(" ").at(1)}
      </p>
      <div className="vstack align-items-end align-items-sm-center">
        {data.weather[0] && (
          <Image
            src={`${imgUrl}/${data.weather[0].icon}.png`}
            alt="картинка погоды"
            width={60}
            height={60}
          />
        )}
        <p className="fs-5 mb-0 text-start  d-sm-none">
          {data.weather.at(0)?.main}
        </p>
      </div>

      <div className="vstack align-items-start">
        <p className="fs-5 mb-0 text-start d-none d-sm-block">
          {data.weather.at(0)?.main}
        </p>
        <p className="fs-5 mb-0 text-nowrap text-start">
          {data.main.temp} &#8451;
        </p>
        <p className="fs-5 mb-0 text-nowrap">{data.wind.speed} м/с</p>
        <p className="fs-5 mb-0 text-nowrap text-start">
          {data.main.humidity}%
        </p>
      </div>
    </div>
  );
}
