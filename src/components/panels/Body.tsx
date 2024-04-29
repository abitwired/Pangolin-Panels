import { useAppContext } from "../../context";
import { NotConnected } from "../statuses/NotConnected";
import { Connecting } from "../statuses/Connecting";
import { Scroll } from "./Scroll";
import { Menu } from "./Menu";
import { Pods } from "../pages/Pods";
import { Services } from "../pages/Services";

export const Body = () => {
  const [context] = useAppContext();

  if (context.client.status === "disconnected") {
    // Show the user that they are not connected to the k8sApi
    return (
      <Scroll>
        <NotConnected />
      </Scroll>
    );
  } else if (context.client.status === "connecting") {
    return (
      <Scroll>
        <Connecting />
      </Scroll>
    );
  }

  return (
    <div className="flex-1 overflow-hidden">
      <Menu />
      <Scroll></Scroll>
    </div>
  );
};
