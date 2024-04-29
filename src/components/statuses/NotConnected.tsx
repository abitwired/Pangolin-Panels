import DisconnectedSvg from "../../assets/icons/disconnected";
import { useAppContext } from "../../context";

export const NotConnected = () => {
  const [context] = useAppContext();

  return (
    <>
      <div className="flex justify-center w-full content-center items-center gap-1">
        <DisconnectedSvg fill="#ff3c3c" className="max-w-20 p-2" />
        <p className="text-center text-3xl">
          Disconnected from the Kubernetes cluster
        </p>
      </div>
      <p className="text-center text-md">{context.client.message ?? ""}</p>
    </>
  );
};
