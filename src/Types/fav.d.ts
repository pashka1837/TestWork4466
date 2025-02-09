type FavCity = {
  name: string;
  id: number;
};

type FavState = {
  cities: FavCity[];
};

type FavActions = {
  setInitial: (cities: FavCity[]) => void;
  addFav: (city: FavCity) => void;
  removeFav: (id: number) => void;
};

type FavStore = FavState & FavActions;
