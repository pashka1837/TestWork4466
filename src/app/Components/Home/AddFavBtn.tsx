import { useFavStore } from "@/Components/FavStoreProvider/FavStoreProvider";

type AddFavBtnProps = {
  city: FavCity;
};

export function AddFavBtn({ city }: AddFavBtnProps) {
  const addFav = useFavStore((state) => state.addFav);

  function handleClick() {
    addFav(city);
  }
  return (
    <button onClick={handleClick} className="btn btn-warning mb-2">
      Добавить в избранное
    </button>
  );
}
