import "./AddClusterForm.css";

export const AddClusterForm = () => {
  return (
    <form
      popover="auto"
      id="add-cluster-form"
      className="fixed p-2 add-cluster-form"
      style={{
        background: "none",
      }}
    >
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl text-white">Add a Cluster</h1>
        <div className="flex items-center gap-2">
          <label id="cluster-name-label" className="text-white text-lg w-2/5">
            Name
          </label>
          <input
            type="text"
            placeholder="Name"
            name="cluster-name"
            className="rounded-md p-2 w-3/5"
            aria-labelledby="cluster-name-label"
          />
        </div>
        <div className="flex items-center gap-2">
          <label id="server-address-label" className="text-white text-lg w-2/5">
            Server Address
          </label>
          <input
            type="text"
            placeholder="192.168.56.1:8001"
            name="server-address"
            className="rounded-md p-2 w-3/5"
            aria-labelledby="server-address-label"
          />
        </div>
      </div>
    </form>
  );
};

export default AddClusterForm;
