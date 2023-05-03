import React from "react";
import AppFooter from "./components/common/AppFooter";
import AppNavbar from "./components/common/AppNavbar";
import AppRouter from "./components/common/AppRouter";
import "./App.css";

function App() {
  return (
    <div className="App font-sans">
      <AppNavbar />
      <AppRouter />
      <AppFooter />
    </div>
  );
}

export default App;
