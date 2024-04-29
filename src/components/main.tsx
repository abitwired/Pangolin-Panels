import { Sidebar } from "./sidebar/Sidebar";
import { Body } from "./panels/Body";

const Main = () => {
  return (
    <div className="overflow-hidden">
      <div className="flex">
        <Sidebar />
        <Body />
      </div>
    </div>
  );
};

export default Main;
