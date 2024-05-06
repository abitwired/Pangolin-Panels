import { Route, Routes } from "react-router-dom";
import { useAppContext } from "../../context";
import { NotConnected } from "../statuses/NotConnected";
import { Connecting } from "../statuses/Connecting";
import { Menu } from "./Menu";
import { Pods } from "../pages/Pods";
import { Services } from "../pages/Services";

export const Body = () => {
  const [context] = useAppContext();

  if (context.client.status === "disconnected") {
    // Show the user that they are not connected to the k8sApi
    return <NotConnected />;
  } else if (context.client.status === "connecting") {
    return <Connecting />;
  }

  return (
    <div className="flex-1">
      <Menu />
      <Routes>
        <Route path="/pods" Component={Pods} />
        <Route path="/services" Component={Services} />
      </Routes>
    </div>
  );
};
