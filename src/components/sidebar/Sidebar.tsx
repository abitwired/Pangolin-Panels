import { useEffect, useState } from "react";
import { Cluster } from "@kubernetes/client-node";
import { ClusterButton } from "./ClusterButton";
import { PangolinCluster } from "../../types/types";

const Favicon = require("../../assets/icons/favicon.png").default;

export const Sidebar = () => {
  const [pangolinClusters, setPangolinClusters] = useState<PangolinCluster[]>(
    []
  );

  useEffect(() => {
    api.clusters().then((clusters) => {
      setPangolinClusters(clusters);
    });
  }, []);

  return (
    <div className="top-10 bottom-0 lg:left-0 p-2 w-[200px] h-screen overflow-y-auto bg-gray-900">
      <div className="flex flex-col justify-center content-center items-center gap-2 mb-4">
        <img
          src={Favicon}
          width="75"
          className="ring rounded-full ring-blue-600 mt-2"
        />
      </div>
      <hr className="border-slate-700" />
      <div className="flex flex-col gap-2 items-center mt-5">
        <h2 className="font-semibold text-md">Clusters</h2>
        <ul className="flex flex-col gap-2 items-center">
          {pangolinClusters.map((pangolinCluster: PangolinCluster) => (
            <ClusterButton
              key={pangolinCluster.cluster.name}
              pangolinCluster={pangolinCluster}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};
