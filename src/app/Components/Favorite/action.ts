"use server";

import axios from "axios";

const api = process.env.API_KEY;
const baseUrl = process.env.BASE_URL;

export async function fetchFav(cities: FavCity[]) {
  const citiesPromis = cities.map((city) =>
    axios.get(
      `${baseUrl}/data/2.5/weather?id=${city.id}&appid=${api}&units=metric`
    )
  );

  try {
    const citiesRes = await Promise.all(citiesPromis);
    if (citiesRes[0].status !== 200)
      return {
        errorMsg: "Что то не так с соединением, попробуйте еще раз",
        data: null,
      };
    if (!citiesRes[0].data)
      return { errorMsg: "Иформация по данному городу не найдена", data: null };

    const data = citiesRes.map((citRes) => citRes.data);
    return { errorMsg: null, data: data as CurrWeatherResType[] };
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
