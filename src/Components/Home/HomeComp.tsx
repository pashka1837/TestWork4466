"use client";
import styles from "./HomeComp.module.scss";
import { useActionState } from "react";
import { SearchForm } from "./SearchForm";
import { WeatherResult } from "./WeatherResult";
import { FormStateType, search } from "./action";
import dynamic from "next/dynamic";

const ErrorToast = dynamic(
  () => import("../Toast/ErrorToast").then((mod) => mod.ErrorToast),
  { ssr: false }
);

export function HomeComp() {
  const initFormState: FormStateType = {
    errorMsg: null,
    data: null,
  };
  const [formState, searchAction, pending] = useActionState(
    search,
    initFormState
  );
  return (
    <div className={`${styles.outer} container-fluid p-2 p-md-3 p-lg-4`}>
      {formState.errorMsg && <ErrorToast msg={formState.errorMsg} />}
      <SearchForm searchAction={searchAction} pending={pending} />
      <WeatherResult formLoad={pending} data={formState.data} />
    </div>
  );
}
