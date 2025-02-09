"use client";
import styles from "@/styles/Base.module.scss";
import { useActionState } from "react";
import { SearchForm } from "./SearchForm";
import { WeatherResult } from "./WeatherResult";
import { search } from "./action";
import dynamic from "next/dynamic";
import { Loader } from "../../../Components/Loader/Loader";

const ErrorToast = dynamic(
  () =>
    import("../../../Components/Toast/ErrorToast").then(
      (mod) => mod.ErrorToast
    ),
  { ssr: false }
);

export function HomeComp() {
  const initFormState: SearchFormStateType = {
    errorMsg: null,
    data: null,
  };
  const [formState, searchAction, pending] = useActionState(
    search,
    initFormState
  );

  return (
    <div className={`${styles.outer} container-fluid p-2 p-md-3 p-lg-4`}>
      {formState.errorMsg && <ErrorToast formState={formState} />}
      <SearchForm searchAction={searchAction} pending={pending} />
      {pending && <Loader />}
      {formState.data && <WeatherResult data={formState.data} />}
    </div>
  );
}
