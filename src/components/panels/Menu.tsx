import { Link } from "react-router-dom";

export const Menu = () => {
  return (
    <div className="bg-slate-800 text-white w-full h-15">
      <div className="flex justify-between items-center">
        <div className="flex gap-2">
          <button className="text-white bg-slate-800 hover:bg-slate-700 p-2 rounded-md">
            Clusters
          </button>
          <button className="text-white bg-slate-800 hover:bg-slate-700 p-2 rounded-md">
            Namespaces
          </button>
          <Link
            to="/pods"
            className="text-white bg-slate-800 hover:bg-slate-700 p-2 rounded-md"
          >
            Pods
          </Link>
          <button className="text-white bg-slate-800 hover:bg-slate-700 p-2 rounded-md">
            Deployments
          </button>
          <Link
            to="/services"
            className="text-white bg-slate-800 hover:bg-slate-700 p-2 rounded-md"
          >
            Services
          </Link>
          <button className="text-white bg-slate-800 hover:bg-slate-700 p-2 rounded-md">
            ConfigMaps
          </button>
          <button className="text-white bg-slate-800 hover:bg-slate-700 p-2 rounded-md">
            Secrets
          </button>
        </div>
      </div>
    </div>
  );
};
