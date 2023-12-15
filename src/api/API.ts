import axios from "axios";

const URL: string =
  "https://api.themoviedb.org/3/movie/top_rated?api_key=1d88de48e71620e259bfbed33480fef5&language=en-US";

export const getData = async () => {
  try {
    return await axios.get(URL).then((res: any) => {
      return res?.data?.results;
    });
  } catch (error) {
    return error;
  }
};
