import { Sidebar } from "./sidebar/Sidebar";
import { Body } from "./panels/Body";

const Main = () => {
  return (
    <div>
      <div className="flex min-h-screen max-h-screen ">
        <Sidebar />
        <Body />
      </div>
    </div>
  );
};

export default Main;
