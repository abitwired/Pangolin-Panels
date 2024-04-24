import { createRoot } from "react-dom/client";
import Home from "./components/home";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(<Home />);
