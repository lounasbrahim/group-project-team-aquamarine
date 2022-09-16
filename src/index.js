import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import "./index.css";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { createStandaloneToast } from "@chakra-ui/toast";

const { ToastContainer, toast } = createStandaloneToast();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ChakraProvider resetCSS={true}>
        <App />
        <ToastContainer />
      </ChakraProvider>
    </Provider>
  </React.StrictMode>
);

toast({ title: "Chakra UI" });
