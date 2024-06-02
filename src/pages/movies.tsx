import { useMoviesApi } from "@/api/queries.api";

const MoviesPage = () => {
  const { data, isPending } = useMoviesApi();

  if (isPending) return <>Loading...</>;

  return <code>{JSON.stringify(data)}</code>;
};

export default MoviesPage;
