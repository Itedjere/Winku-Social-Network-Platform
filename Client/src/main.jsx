import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";
import { ToastContainer } from "react-toastify";

import App from "./App.jsx";
import "react-toastify/dist/ReactToastify.css";
import "./assets/css/main.min.css";
import "./assets/css/style.css";
import "./assets/css/color.css";
import "./assets/css/responsive.css";
import AuthContextProvider from "./contexts/AuthContext.jsx";

const client = new ApolloClient({
  uri: "http://localhost:4040/graphql",
  cache: new InMemoryCache(),
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ApolloProvider client={client}>
      <AuthContextProvider>
        <App />
        <ToastContainer />
      </AuthContextProvider>
    </ApolloProvider>
  </StrictMode>
);
