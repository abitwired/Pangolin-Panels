import DisconnectedSvg from "../../assets/icons/disconnected";
import { useAppContext } from "../../context";

export const NotConnected = () => {
  const [context] = useAppContext();

  return (
    <div className="flex justify-center w-full h-screen gap-1 overflow-x-hidden overflow-y-auto">
      <DisconnectedSvg fill="#ff3c3c" className="max-w-20 p-2" />
      <div className="flex flex-col justify-center content-center gap-1">
        <p className="text-center text-3xl">
          Disconnected from the Kubernetes cluster
        </p>
        <p className="text-center text-md">{context.client.message ?? ""}</p>
      </div>
    </div>
  );
};
