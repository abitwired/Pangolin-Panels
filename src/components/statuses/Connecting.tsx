import DisconnectedSvg from "../../assets/icons/disconnected";
import { useAppContext } from "../../context";

export const Connecting = () => {
  const [context] = useAppContext();

  console.log(context);

  return (
    <div className="p-2 overflow-y-auto flex flex-col justify-center content-center items-center w-full h-screen">
      <div className="flex justify-center w-full content-center items-center gap-1">
        <DisconnectedSvg fill="#fff" className="max-w-20 p-2" />
        <p className="text-center text-4xl">Connecting...</p>
      </div>
    </div>
  );
};
