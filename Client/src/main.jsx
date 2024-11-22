import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
  gql,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { ToastContainer } from "react-toastify";

import App from "./App.jsx";
import "react-toastify/dist/ReactToastify.css";
import "./assets/css/main.min.css";
import "./assets/css/style.css";
import "./assets/css/color.css";
import "./assets/css/responsive.css";
import AuthContextProvider from "./contexts/AuthContext.jsx";

const httpLink = createHttpLink({
  uri: `${import.meta.env.VITE_SERVER_URL}/graphql`,
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const userDetails = JSON.parse(localStorage.getItem("AuthUser"));
  const token = userDetails?.token;
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  uri: `${import.meta.env.VITE_SERVER_URL}/graphql`,
  link: authLink.concat(httpLink),
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
