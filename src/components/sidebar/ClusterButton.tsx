import { Cluster, Context, User } from "@kubernetes/client-node";
import { useReducer } from "react";
import { ActionTypes, useAppContext } from "../../context";
import { reducer } from "../../context";
import { PangolinCluster } from "../../types/types";

type ClusterButtonProps = {
  pangolinCluster: PangolinCluster;
};

export const ClusterButton = ({ pangolinCluster }: ClusterButtonProps) => {
  const [context, dispatch] = useAppContext();

  const connect = async () => {
    const options: {
      clusters: Cluster[];
      contexts: Context[];
      currentContext: Context["name"];
      users: User[];
    } = {
      clusters: [pangolinCluster.cluster],
      contexts: [pangolinCluster.context],
      currentContext: pangolinCluster.currentContext,
      users: [pangolinCluster.user],
    };

    dispatch({
      type: ActionTypes.CLIENT_STATUS,
      payload: {
        status: "connecting",
      },
    });

    const client = await api.connect(options);
    dispatch({
      type: ActionTypes.CLIENT_STATUS,
      payload: client,
    });
  };

  return (
    <button
      onClick={connect}
      className="rounded-md bg-slate-800 p-2 ring-2 ring-emerald-500 hover:ring-emerald-600 hover:bg-slate-900 font-semibold text-emerald-500"
    >
      {pangolinCluster.cluster.name}
    </button>
  );
};
