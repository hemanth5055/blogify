import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
// import { ContextforUser } from "./Context/Usercontext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      {/* <ContextforUser> */}
        <App />
      {/* </ContextforUser> */}
    </BrowserRouter>
  </StrictMode>
);
