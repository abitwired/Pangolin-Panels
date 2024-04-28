import { Sidebar } from "./panels/sidebar";
import { Body } from "./panels/body";
import { useContext } from "react";
import { AppContext } from "../context";
import { Frame } from "./panels/frame";

const Main = () => {
  const context = useContext(AppContext);
  console.log(api);

  return (
    <div className="rounded-lg overflow-hidden">
      <Frame />
      <div className="flex" style={{ position: "relative", top: "40px" }}>
        <Sidebar />
        <Body />
      </div>
    </div>
  );
};

export default Main;
