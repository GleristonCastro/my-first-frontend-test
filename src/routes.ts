import { Route, Routes } from "react-router-dom";
import Login from "./Login";

export default function MainRoutes() {
  return (  
    <Routes>
      <Route path="/" element={<Login />} />
    </Routes>
  );
}