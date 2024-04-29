import { useAppContext } from "../../context";
import { NotConnected } from "../statuses/NotConnected";
import { Connecting } from "../statuses/Connecting";

export const Body = () => {
  const [context] = useAppContext();

  const getNamespaces = async () => {
    const namespaces = await api.getNamespaces();
  };

  console.log(context);

  if (context.client.status === "disconnected") {
    // Show the user that they are not connected to the k8sApi
    return <NotConnected />;
  } else if (context.client.status === "connecting") {
    return <Connecting />;
  }

  return (
    <div className="p-2 overflow-y-auto flex flex-col justify-center content-center items-center w-full h-screen">
      <button
        className="p-2 bg-blue-500 text-white rounded-md"
        onClick={getNamespaces}
      >
        Namespaces
      </button>
    </div>
  );
};
