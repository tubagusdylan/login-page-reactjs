import { Route, Routes } from "react-router-dom";
import { App } from "./App";
import { Home } from "./pages/Home";

export function Page() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<App />} />
      </Routes>
    </>
  );
}
