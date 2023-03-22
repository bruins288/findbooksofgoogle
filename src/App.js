import React from "react";

/*custom components */
import Header from "./components/Header";
import MainContent from "./pages/MainContent.jsx";
/*custom styles */
import "./App.scss";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <MainContent />
    </div>
  );
}

export default App;
