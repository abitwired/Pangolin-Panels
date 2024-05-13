import { PlusCircle } from "react-feather";

export const AddClusterButton = () => {
  const onClick = (e: React.MouseEvent<HTMLElement>) => {};

  return (
    <button
      popovertarget="add-cluster-form"
      onClick={onClick}
      className="flex gap-1 items-center rounded-md bg-slate-800 p-2 ring-2 ring-emerald-500 hover:ring-emerald-600 hover:bg-slate-900 font-semibold text-emerald-500"
    >
      <PlusCircle />
      Add Cluster
    </button>
  );
};

export default AddClusterButton;
