import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import { AuthContextFunction } from "./Context";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <AuthContextFunction>
      <App />
    </AuthContextFunction>
  </StrictMode>
);
