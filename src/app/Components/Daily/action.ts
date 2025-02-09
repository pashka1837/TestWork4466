"use server";

import axios from "axios";

const api = process.env.API_KEY;
const baseUrl = process.env.BASE_URL;

export async function fetchDaily(id: string) {
  try {
    const dailyRes = await axios.get(
      `${baseUrl}/data/2.5/forecast?id=${id}&cnt=32&appid=${api}&units=metric`
    );

    if (dailyRes.status !== 200)
      return {
        errorMsg: "Что то не так с соединением, попробуйте обновить страницу",
        data: null,
      };
    if (!dailyRes.data)
      return { errorMsg: "Иформация по данному городу не найдена", data: null };

    return { errorMsg: null, data: dailyRes.data as DailyResType };
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
      errorMsg: "Что то пошло не так, попробуйте обновить страницу",
      data: null,
    };
  }
}
