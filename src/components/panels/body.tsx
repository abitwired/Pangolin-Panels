import { useContext } from "react";
import { AppContext, AppContextType } from "../../context";
import DisconnectedSvg from "../../assets/icons/disconnected";

export const Body = () => {
  const context: AppContextType = useContext(AppContext);

  const getNamespaces = async () => {
    const namespaces = await api.getNamespaces(context.k8sApi);
    console.log(namespaces);
  };

  if (context.k8sApi === null) {
    // Show the user that they are not connected to the k8sApi
    console.log("Not connected to k8sApi");
    return (
      <div className="p-2 overflow-y-auto flex flex-col justify-center content-center items-center w-full h-screen">
        <div className="flex justify-center w-full content-center items-center gap-1">
          <DisconnectedSvg fill="#fff" className="max-w-20 p-2" />
          <p className="text-center text-4xl">
            Not connected to a Kubernetes Cluster
          </p>
        </div>
        <div className="flex justify-center content-center items-center gap-1">
          <button
            className="p-2 bg-blue-500 text-white rounded-md"
            onClick={getNamespaces}
          >
            Connect
          </button>
        </div>
      </div>
    );
  }

  return <div className="p-2 justify-items-center w-screen h-screen"></div>;
};
