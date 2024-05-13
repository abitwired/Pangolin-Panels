import { Sidebar } from "./sidebar/Sidebar";
import { Body } from "./panels/Body";
import { HashRouter } from "react-router-dom";
import AddClusterForm from "./forms/AddClusterForm";

const Main = () => {
  return (
    <HashRouter>
      <div className="flex min-h-screen">
        <Sidebar />
        <Body />
        <AddClusterForm />
      </div>
    </HashRouter>
  );
};

export default Main;
