import React from "react";
import { Route, Routes } from "react-router-dom";

/*Layout */
import MainLayout from "./Layouts/MainLayout";
/*custom components */
import ContentDetails from "./pages/ContentDetails";
import NotFound from "./pages/NotFound";
import MainContent from "./pages/MainContent.jsx";
/*custom styles */
import "./App.scss";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<MainContent />} />
        <Route path="Book/:id" element={<ContentDetails />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
