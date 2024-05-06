import { Sidebar } from "./sidebar/Sidebar";
import { Body } from "./panels/Body";
import { HashRouter } from "react-router-dom";

const Main = () => {
  return (
    <HashRouter>
      <div className="flex min-h-screen">
        <Sidebar />
        <Body />
      </div>
    </HashRouter>
  );
};

export default Main;
