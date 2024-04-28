import { Sidebar } from "./panels/sidebar";
import { Body } from "./panels/body";
import { Frame } from "./panels/frame";

const Main = () => {
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
