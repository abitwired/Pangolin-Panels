import MinimizeCircle from "../../assets/icons/minimize-circle";
import CloseCircle from "../../assets/icons/close-circle";

export const Frame = () => {
  return (
    <div className="titlebar fixed top-0 left-0 w-screen flex flex-row p-2 bg-gray-800 justify-end items-center gap-1 z-10">
      <button
        aria-label="Minimize"
        className="titlebar-button"
        onClick={api.minimize}
      >
        <MinimizeCircle fill={"#f5bd00"} />
      </button>
      <button aria-label="Close" className="titlebar-button" onClick={api.quit}>
        <CloseCircle fill={"#c01c28"} />
      </button>
    </div>
  );
};
