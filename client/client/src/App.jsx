import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import ListProperties from "./components/ListProperties";
import OneProperty from "./components/OneProperty";

function App() {
  return (
    <>
      <Routes>
        <Route path="/properties" element={<ListProperties />} />
        <Route path="/properties/:id" element={<OneProperty />} />
      </Routes>
    </>
  );
}

export default App;
