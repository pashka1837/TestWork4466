import { useFavStore } from "../../../Components/FavStoreProvider/FavStoreProvider";
import { SingleWeather } from "../../../Components/Weather/SingleWeather";

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
