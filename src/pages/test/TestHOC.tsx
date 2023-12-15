import React, { useEffect, useState } from "react";
import { getData } from "../../api/API";
import { Link } from "react-router-dom";

const TestHOC = () => {
  const [state, setState] = useState([]);

  useEffect(() => {
    getData().then((res) => {
      setState(res);
    });
  }, []);

  return (
    <div className="w-full">
      <h1>Test HOC</h1>
      <div className="grid grid-cols-4 w-full gap-4 ">
        {state.map((el: any) => (
          <Link to={`/test/${el.id}`}>
            <div className="border rounded-md">
              <img
                className="min-h-[300px] rounded-t-md "
                src={`https://image.tmdb.org/t/p/w500/${el.poster_path}`}
              />
              <p className="text-[20px] mt-8 text-center font-bold leading-tight mb-2">
                {el.title}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TestHOC;
