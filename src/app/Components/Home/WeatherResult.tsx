import { useFavStore } from "../../../Components/FavStoreProvider/FavStoreProvider";
import { SingleWeather } from "../../../Components/Weather/SingleWeather";
import { AddFavBtn } from "./AddFavBtn";

type WeatherResultProps = {
  data: CurrWeatherResType;
};

export function WeatherResult({ data }: WeatherResultProps) {
  const { cities } = useFavStore((state) => state);
  const currCity = cities.find((cit) => cit.id === data.id);
  return (
    <div className="container-lg pt-5">
      {!currCity && <AddFavBtn city={{ name: data.name, id: data.id }} />}
      <SingleWeather data={data} />
    </div>
  );
}
