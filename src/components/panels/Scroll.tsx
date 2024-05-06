export const Scroll = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div className="flex overflow-x-hidden overflow-y-auto p-2">{children}</div>
  );
};
