import { Loader } from "../Loader/Loader";

type WeatherResultProps = {
  formLoad: boolean;
  data: CurrWeatherResType | null;
};

export function WeatherResult({ formLoad, data }: WeatherResultProps) {
  //   return <div>{`${formLoad}`}</div>;
  return (
    <div className="container  p-3 pt-4" style={{ height: "100%" }}>
      {formLoad && <Loader />}
      {data && (
        <>
          <h3>{data.name}</h3>
        </>
      )}
    </div>
  );
}
