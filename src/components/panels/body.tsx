import { useContext, useReducer } from "react";
import { ActionTypes, AppContext, reducer } from "../../context";
import DisconnectedSvg from "../../assets/icons/disconnected";
import { CoreV1Api } from "@kubernetes/client-node";

export const Body = () => {
  const [context, dispatch] = useReducer(reducer, useContext(AppContext));
  console.log(context.k8s);

  const getNamespaces = async () => {
    const namespaces = await api.getNamespaces();
  };

  const connect = async () => {
    dispatch({
      type: ActionTypes.K8S_CLIENT_STATUS,
      payload: "connecting",
    });
    const client = await api.connect();
    dispatch({
      type: ActionTypes.K8S_CLIENT_STATUS,
      payload: client.status,
    });
  };

  if (context.k8s.client.status === "disconnected") {
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
            onClick={connect}
          >
            Connect
          </button>
        </div>
      </div>
    );
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
