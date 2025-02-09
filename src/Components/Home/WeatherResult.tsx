import styles from "./HomeComp.module.scss";

import Image from "next/image";
import { useFavStore } from "../FavStoreProvider/FavStoreProvider";

type WeatherResultProps = {
  data: CurrWeatherResType;
};

const imgUrl = process.env.NEXT_PUBLIC_IMG_URL;

export function WeatherResult({ data }: WeatherResultProps) {
  const { cities } = useFavStore((state) => state);
  const currCity = cities.find((cit) => cit.id === data.id);
  console.log(data, cities);
  return (
    <div className="container-lg pt-5" style={{ height: "100%" }}>
      {!currCity && <AddFavBtn city={{ name: data.name, id: data.id }} />}
      <div
        className="container-lg border border-primary rounded 
        p-3 p-lg-4 d-flex flex-column 
        flex-md-row column-gap-3
        justify-content-center"
      >
        <div className="hstack gap-md-2">
          <h3 className="text-nowrap">{data.name}</h3>
          <Image
            className={`${styles.weatherImg} ms-auto ms-md-0`}
            src={`${imgUrl}/${data.weather.at(0)?.icon}.png`}
            alt="картинка погоды"
            width={60}
            height={60}
          />
        </div>
        <div className="vr d-none d-md-block"></div>
        <div className="hstack">
          <p className="fs-4 mb-0">{data.weather.at(0)?.main}</p>
        </div>
        <div className={`${styles.truncateText} vr d-none d-md-block`}></div>
        <div className="hstack  gap-1">
          <p className={`${styles.truncateText} fs-5 mb-0 fw-bold`}>
            Температура:
          </p>
          <p className="fs-5 mb-0 text-nowrap">{data.main.temp} &#8451;</p>
        </div>
        <div className="vr d-none d-md-block"></div>
        <div className="hstack  gap-1">
          <p className="fs-5 mb-0 fw-bold">Ветер:</p>
          <p className="fs-5 mb-0 text-nowrap">{data.wind.speed} м/с</p>
        </div>
        <div className="vr d-none d-md-block"></div>
        <div className={`${styles.truncateText} hstack  gap-1`}>
          <p className={`${styles.truncateText} fs-5 mb-0 fw-bold`}>
            Влажность:
          </p>
          <p className="fs-5 mb-0 text-nowrap">{data.main.humidity}%</p>
        </div>
      </div>
    </div>
  );
}

type AddFavBtnProps = {
  city: FavCity;
};

function AddFavBtn({ city }: AddFavBtnProps) {
  const { addFav } = useFavStore((state) => state);

  function handleClick() {
    addFav(city);
  }
  return (
    <button onClick={handleClick} className="btn btn-warning mb-2">
      Добавить в избранное
    </button>
  );
}
