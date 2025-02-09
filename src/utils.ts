export function getFavFromLocal() {
  const favLocal = localStorage.getItem("favs");
  if (!favLocal) return [];
  const data = JSON.parse(favLocal);
  if (!Array.isArray(data)) return [];
  if (data.length && (!("name" in data.at(0)) || !("id" in data.at(0))))
    return [];

  return data as FavCity[];
}
