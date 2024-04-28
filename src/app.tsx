import { createRoot } from "react-dom/client";
import { AppProvider } from "./context";
import Main from "./components/main";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
  <AppProvider>
    <Main />
  </AppProvider>
);
