"use server";

import axios from "axios";

export type FormStateType = {
  errorMsg: string | null;
  data: CurrWeatherResType | null;
};

const api = "6952ed23144ea8fa95eaea4a9c1fb236";

export async function search(
  formState: FormStateType,
  formData: FormData
): Promise<FormStateType> {
  formState.errorMsg = null;
  const search = formData.get("search");
  if (!search || typeof search !== "string")
    return { errorMsg: "dasdad", data: null };

  try {
    const geoRes = await axios(
      `http://api.openweathermap.org/geo/1.0/direct?q=${search}&limit=${1}&appid=${api}`
    );
    if (geoRes.status !== 200)
      return {
        errorMsg: "Что то не так с соединением, попробуйте еще раз",
        data: null,
      };
    if (!geoRes.data.length)
      return { errorMsg: "Данный город не найден", data: null };

    const { lat, lon } = geoRes.data.at(0) as GeoResType;

    const weathRes = await axios(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api}`
    );

    if (weathRes.status !== 200)
      return {
        errorMsg: "Что то не так с соединением, попробуйте еще раз",
        data: null,
      };
    if (!weathRes.data)
      return { errorMsg: "Иформация по данному городу не найдена", data: null };
    return { errorMsg: null, data: weathRes.data as CurrWeatherResType };
  } catch {
    return {
      errorMsg: "Что то не так с соединением, попробуйте еще раз",
      data: null,
    };
  }
}
