import { useEffect } from "react";
import ConnectedSvg from "../../assets/icons/connected";
import { useAppContext } from "../../context";
import { V1Namespace } from "@kubernetes/client-node";

export const Connected = () => {
  const [context] = useAppContext();

  useEffect(() => {
    api.getNamespaces().then((namespaces: V1Namespace[]) => {
      console.log("namespaces:", namespaces);
    });
  }, []);

  return (
    <div className="flex justify-center w-full content-center items-center gap-1">
      <ConnectedSvg fill="rgb(16, 185, 129)" className="max-w-20 p-2" />
      <p className="text-center text-4xl">Connected!</p>
    </div>
  );
};
