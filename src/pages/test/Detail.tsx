import { useEffect, useState } from "react";
import { getData } from "../../api/API";
import { useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();
  const [state, setState]: any = useState({});
  const [state1, setState1]: any = useState({});

  useEffect(() => {
    getData().then((res) => {
      setState(res.find((el: any) => el.id === parseInt(id!)));
    });
  }, []);

  useEffect(() => {
    getData().then((res) => {
      setState(res[3]);
    });
  }, []);

  return (
    <div className="flex justify-between ">
      <div className="border rounded-md">
        <img
          className="min-h-[300px] rounded-t-md "
          src={`https://image.tmdb.org/t/p/w500/${state?.poster_path}`}
        />
        <p className="text-[20px] mt-8 text-center font-bold leading-tight mb-2">
          {state?.title}
        </p>
      </div>

      <div className="border rounded-md">
        <img
          className="min-h-[300px] rounded-t-md "
          src={`https://image.tmdb.org/t/p/w500/${state?.poster_path}`}
        />
        <p className="text-[20px] mt-8 text-center font-bold leading-tight mb-2">
          {state?.title}
        </p>
      </div>
    </div>
  );
};

export default Detail;
