import { createStore } from "zustand/vanilla";

export const defaultInitState: FavState = {
  cities: [],
  currentSearch: null,
};

export const createFavStore = (initState: FavState = defaultInitState) => {
  return createStore<FavStore>()((set) => ({
    ...initState,
    setCurrSearch: (data) =>
      set(() => {
        return { currentSearch: data };
      }),
    setInitial: (cities) =>
      set(() => {
        return { cities };
      }),
    addFav: (city) =>
      set((state) => {
        const newState = [...state.cities, city];
        localStorage.setItem("favs", JSON.stringify(newState));
        return { cities: newState };
      }),
    removeFav: (id) =>
      set((state) => {
        const newState = state.cities.filter((oldC) => oldC.id !== id);
        localStorage.setItem("favs", JSON.stringify(newState));
        return {
          cities: newState,
        };
      }),
  }));
};
