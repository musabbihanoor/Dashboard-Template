import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";

import { AppRouter } from "./router";
import { Layout } from "./components/layout";

import Loading from "./components/layout/Loading";

import "./App.css";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const authorize = () => setIsAuthenticated(true);

  return (
    <BrowserRouter>
      {/* the layout contains sidebar and navbar */}
      <Layout isAuthenticated={isAuthenticated}>
        {/* contains all the routes */}
        <AppRouter authorize={authorize} />

        {/* setup your condition for loading, you can also use this component in other pages */}
        <Loading isLoading={false} />
      </Layout>
    </BrowserRouter>
  );
};

export default App;
