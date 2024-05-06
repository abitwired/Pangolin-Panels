import { V1Pod } from "@kubernetes/client-node";
import { useEffect, useMemo, useState } from "react";
import { Loading } from "../shared/Loading";
import { Scroll } from "../panels/Scroll";

export const Pods = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [pods, setPods] = useState<V1Pod[]>([]);

  useEffect(() => {
    api.getPods().then((pods) => {
      setPods(pods);
      setIsLoading(false);
    });
  }, []);
  console.log(pods);

  const row = (pod: V1Pod) => {
    const color =
      pod.status?.phase === "Running" ? "text-green-500" : "text-red-500";

    return (
      <tr
        key={pod.metadata?.name}
        className="hover:bg-gray-900 cursor-pointer rounded-md"
      >
        <td className="p-1">{pod.metadata?.name}</td>
        <td className="p-1">{pod.metadata?.namespace}</td>
        <td className="p-1">{pod.spec?.containers?.length}</td>
        <td className="p-1">
          {pod.status?.containerStatuses?.reduce(
            (acc, status) => acc + status.restartCount,
            0
          )}
        </td>
        <td className="p-1">
          {pod.metadata?.creationTimestamp.toLocaleString()}
        </td>
        <td className={`${color} p-1`}>{pod.status?.phase}</td>
      </tr>
    );
  };

  const rows = useMemo(() => {
    if (!pods) return null;
    return pods.map(row);
  }, [pods]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Scroll>
      <table className="table-auto w-full">
        <thead className="text-left">
          <tr>
            <th className="p-1">Name</th>
            <th className="p-1">Namespace</th>
            <th className="p-1">Containers</th>
            <th className="p-1">Restarts</th>
            <th className="p-1">Age</th>
            <th className="p-1">Status</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </Scroll>
  );
};
