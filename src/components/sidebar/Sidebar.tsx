import { useEffect, useState } from "react";
import { ClusterButton } from "./ClusterButton";
import { PangolinCluster } from "../../types/types";
import AddClusterButton from "./AddClusterButton";

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
    <div className="lg:left-0 p-2 w-[200px] bg-gray-900">
      <div className="sticky top-0 flex flex-col gap-4">
        <div className="flex flex-col justify-center content-center items-center">
          <img
            src={Favicon}
            width="75"
            className="ring rounded-full ring-blue-600"
          />
        </div>
        <hr className="border-slate-700" />
        <div className="flex flex-col items-center">
          <AddClusterButton />
        </div>
        <hr className="border-slate-700" />
        <div className="flex flex-col items-center">
          <ul className="flex flex-col items-center">
            {pangolinClusters.map((pangolinCluster: PangolinCluster) => (
              <ClusterButton
                key={pangolinCluster.cluster.name}
                pangolinCluster={pangolinCluster}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
