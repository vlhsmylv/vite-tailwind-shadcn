import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useMoviesApi = () =>
  useQuery({
    queryKey: ["movies"],
    queryFn: async () => {
      const { data } = await axios.get("https://dummyapi.online/api/movies");
      return data;
    },
  });
