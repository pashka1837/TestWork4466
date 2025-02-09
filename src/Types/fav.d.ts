type FavCity = {
  name: string;
  id: number;
};

type FavState = {
  cities: FavCity[];
  currentSearch: CurrWeatherResType | null;
};

type FavActions = {
  setCurrSearch: (data: CurrWeatherResType) => void;
  setInitial: (cities: FavCity[]) => void;
  addFav: (city: FavCity) => void;
  removeFav: (id: number) => void;
};

type FavStore = FavState & FavActions;
