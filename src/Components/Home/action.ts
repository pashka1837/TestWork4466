"use server";

import axios from "axios";

export type FormStateType = {
  errorMsg: string | null;
  data: CurrWeatherResType | null;
};

const api = process.env.API_KEY;
const baseUrl = process.env.BASE_URL;

export async function search(
  formState: FormStateType,
  formData: FormData
): Promise<FormStateType> {
  formState.errorMsg = null;
  const search = formData.get("search");
  if (!search || typeof search !== "string")
    return { errorMsg: "dasdad", data: null };

  try {
    const weathRes = await axios.get(
      `${baseUrl}/data/2.5/weather?q=${search}&appid=${api}&units=metric`,
      {
        adapter: "fetch",
        fetchOptions: { cache: "no-store" },
      }
    );
    if (weathRes.status !== 200)
      return {
        errorMsg: "Что то не так с соединением, попробуйте еще раз",
        data: null,
      };
    if (!weathRes.data)
      return { errorMsg: "Иформация по данному городу не найдена", data: null };

    return { errorMsg: null, data: weathRes.data as CurrWeatherResType };
  } catch (error: any) {
    if (error.status === 404)
      return {
        errorMsg: "Иформация по данному городу не найдена",
        data: null,
      };

    if (`${error.status}`.at(0) === "5")
      return {
        errorMsg: "Что то не так с сервером, попробуйте позднее",
        data: null,
      };
    return {
      errorMsg: "Что то пошло не так  попробуйте еще раз",
      data: null,
    };
  }
}
