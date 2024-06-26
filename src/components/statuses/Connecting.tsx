import ConnectedSvg from "../../assets/icons/connected";
import { useAppContext } from "../../context";

export const Connecting = () => {
  const [context] = useAppContext();

  console.log(context);

  return (
    <div className="flex justify-center w-full content-center items-center gap-1">
      <ConnectedSvg fill="rgb(16, 185, 129)" className="max-w-20 p-2" />
      <p className="text-center text-4xl">Connecting...</p>
    </div>
  );
};
