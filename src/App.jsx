import { Routes, Route } from "react-router-dom";
import PointScreen from "./components/PointScreen";
import { points } from "./data/points";

export default function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={<PointScreen point={points[0]} isLanding={true} />}
      />
      <Route path="/punto-2" element={<PointScreen point={points[1]} />} />
      <Route path="/punto-3" element={<PointScreen point={points[2]} />} />
    </Routes>
  );
}