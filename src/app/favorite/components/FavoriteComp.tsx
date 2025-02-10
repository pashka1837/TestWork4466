"use client";

import styles from "@/styles/Base.module.scss";

import { useFavStore } from "@/Components/FavStoreProvider/FavStoreProvider";
import { useEffect, useState } from "react";
import { fetchFav } from "../action";
import dynamic from "next/dynamic";
import { Loader } from "@/Components/Loader/Loader";
import { SingleWeather } from "@/Components/Weather/SingleWeather";
import { RemoveFavBtn } from "./RemoveFavBtn";

const ErrorToast = dynamic(
  () =>
    import("../../../Components/Toast/ErrorToast").then(
      (mod) => mod.ErrorToast
    ),
  { ssr: false }
);

export function FavoriteComp() {
  const cities = useFavStore((st) => st.cities);
  const [data, setData] = useState<CurrWeatherResType[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    if (cities.length < data.length) {
      setData(data.filter((d) => !!cities.find((c) => c.id === d.id)));
      return;
    }
    if (!cities.length) return;

    async function fetchData() {
      setLoading(true);
      const res = await fetchFav(cities);
      setLoading(false);
      if (res.errorMsg) return setError(res.errorMsg);
      setData(res.data!);
    }
    fetchData();
  }, [cities]);

  return (
    <div
      className={`${styles.outer} container-fluid p-2 p-3 p-lg-4 d-flex flex-column gap-5 align-items-center`}
    >
      {error && <ErrorToast formState={{ errorMsg: error, data }} />}
      {isLoading ? (
        <Loader />
      ) : data.length ? (
        data.map((d) => (
          <div className="container-lg" key={d.id}>
            <RemoveFavBtn id={d.id} />
            <SingleWeather data={d} />
          </div>
        ))
      ) : (
        <h4>У вас пока нет избранных городов</h4>
      )}
      {}
    </div>
  );
}
