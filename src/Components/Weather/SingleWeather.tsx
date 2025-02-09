import styles from "@/styles/Base.module.scss";

import Image from "next/image";
import Link from "next/link";

const imgUrl = process.env.NEXT_PUBLIC_IMG_URL;

type SingleWeatherProps = {
  data: CurrWeatherResType;
};

export function SingleWeather({ data }: SingleWeatherProps) {
  return (
    <Link
      href={`/${data.name.toLowerCase()}`}
      className="text-decoration-none text-reset"
    >
      <WeatherComp data={data} />
    </Link>
  );
}

type WeatherCompProps = {
  data: CurrWeatherResType;
};

function WeatherComp({ data }: WeatherCompProps) {
  return (
    <div
      className="container-lg border border-primary 
      rounded p-3 p-lg-4 d-flex flex-column
flex-md-row column-gap-3 justify-content-center"
    >
      <div className="hstack gap-md-2 col-md-3 justify-content-between">
        <h3 className="text-nowrap">{data.name}</h3>
        {data.weather[0] && (
          <Image
            className={`ms-auto ms-md-0`}
            src={`${imgUrl}/${data.weather[0].icon}.png`}
            alt="картинка погоды"
            width={60}
            height={60}
          />
        )}
      </div>
      <div className="vr d-none d-md-block"></div>
      <div className="hstack col-md-1 justify-content-md-center">
        <p className="fs-4 mb-0">{data.weather.at(0)?.main}</p>
      </div>
      <div className={`${styles.truncateText} vr d-none d-md-block`}></div>
      <div className="hstack  gap-1 col-md-2 justify-content-md-center">
        <p className={`${styles.truncateText} fs-5 mb-0 fw-bold`}>
          Температура:
        </p>
        <p className="fs-5 mb-0 text-nowrap">{data.main.temp} &#8451;</p>
      </div>
      <div className="vr d-none d-md-block"></div>
      <div className="hstack  gap-1 col-md-2 justify-content-md-center">
        <p className="fs-5 mb-0 fw-bold">Ветер:</p>
        <p className="fs-5 mb-0 text-nowrap">{data.wind.speed} м/с</p>
      </div>
      <div className="vr d-none d-md-block"></div>
      <div
        className={`${styles.truncateText} hstack  gap-1 col-md-2 justify-content-md-center`}
      >
        <p className={`${styles.truncateText} fs-5 mb-0 fw-bold`}>Влажность:</p>
        <p className="fs-5 mb-0 text-nowrap">{data.main.humidity}%</p>
      </div>
    </div>
  );
}
