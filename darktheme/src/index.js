import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import AppContextProviderComponent from "./Context/ContextProvider";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <AppContextProviderComponent>
      <App />
    </AppContextProviderComponent>
  </StrictMode>
);
