import { useFavStore } from "@/Components/FavStoreProvider/FavStoreProvider";

type RemoveFavBtnProps = {
  id: number;
};

export function RemoveFavBtn({ id }: RemoveFavBtnProps) {
  const removeFav = useFavStore((state) => state.removeFav);

  function handleClick() {
    removeFav(id);
  }
  return (
    <button onClick={handleClick} className="btn btn-danger mb-2">
      Удалить из избранного
    </button>
  );
}
