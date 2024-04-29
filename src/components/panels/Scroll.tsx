export const Scroll = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div className="flex justify-center w-full h-screen content-center items-center gap-1 overflow-x-hidden overflow-y-auto">
      {children}
    </div>
  );
};
