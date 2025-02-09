type DailyWeatherType = {
  dt: number;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
    sea_level: number;
    grnd_level: number;
    temp_kf: number;
  };
  weather: [
    {
      id: number;
      main: string;
      description: string;
      icon: string;
    }
  ];
  clouds: {
    all: number;
  };
  wind: {
    speed: number;
    deg: number;
    gust: number;
  };
  visibility: number;
  rain: {
    "3h": number;
  };
  pop: number;
  sys: {
    pod: string;
  };
  dt_txt: string;
};

type DailyResType = {
  city: {
    id: number;
    name: string;

    coord: {
      lon: number;
      lat: number;
    };
    timezone: number;
    country: string;
    population: number;
    sunrise: number;
    sunset: number;
  };
  cod: number;
  message: number;
  cnt: number;
  list: DailyWeatherType[];
};

type DailyDataType = {
  [key: string]: DailyWeatherType[];
};
