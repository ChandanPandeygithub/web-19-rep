import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import { AuthContextProvider } from "./AuthContext/AuthContext";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <BrowserRouter>
    <AuthContextProvider>
      <StrictMode>
        <App />
      </StrictMode>
    </AuthContextProvider>
  </BrowserRouter>
);
