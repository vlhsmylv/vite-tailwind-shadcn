const MainPage = () => {
  return (
    <div className="h-screen flex flex-col gap-2 justify-center items-center">
      <h1 className="text-3xl font-semibold">Hello world</h1>
      <div className="flex gap-2">
        <a
          target="_blank"
          href="https://github.com/vlhsmylv/vite-tailwind-shadcn"
          className="text-blue-500 hover:underline"
        >
          Github
        </a>
      </div>
    </div>
  );
};

export default MainPage;
