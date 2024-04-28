const Favicon = require("../../assets/icons/favicon.png").default;

export const Sidebar = () => {
  return (
    <div className="top-10 bottom-0 lg:left-0 p-2 w-[300px] h-screen overflow-y-auto bg-gray-900">
      <div className="flex flex-col justify-center content-center items-center gap-2">
        <img src={Favicon} width="75" />
        <h1 className="font-semibold">Pangolin Panel</h1>
      </div>
    </div>
  );
};
