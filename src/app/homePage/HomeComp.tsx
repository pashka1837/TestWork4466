"use client";
import styles from "@/styles/Base.module.scss";
import { useActionState, useEffect } from "react";
import { SearchForm } from "./SearchForm";
import { WeatherResult } from "./WeatherResult";
import { search } from "./action";
import dynamic from "next/dynamic";
import { useFavStore } from "@/Components/FavStoreProvider/FavStoreProvider";
import { Loader } from "@/Components/Loader/Loader";

const ErrorToast = dynamic(
  () =>
    import("../../Components/Toast/ErrorToast").then((mod) => mod.ErrorToast),
  { ssr: false }
);

export function HomeComp() {
  const initFormState: SearchFormStateType = {
    errorMsg: null,
    data: null,
  };
  const { currentSearch, setCurrSearch } = useFavStore((st) => st);

  const [formState, searchAction, pending] = useActionState(
    search,
    initFormState
  );

  useEffect(() => {
    if (!formState.data || formState.errorMsg) return;
    setCurrSearch(formState.data);
  }, [formState, setCurrSearch]);

  return (
    <div className={`${styles.outer} container-fluid p-2 p-md-3 p-lg-4 `}>
      {formState.errorMsg && <ErrorToast formState={formState} />}
      <SearchForm searchAction={searchAction} pending={pending} />
      {pending && <Loader />}
      {currentSearch && <WeatherResult data={currentSearch} />}
    </div>
  );
}
