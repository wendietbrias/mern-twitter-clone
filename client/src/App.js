import { Routes, Route } from "react-router-dom";
import Auth from "./pages/Auth";
import Homepage from "./pages/Homepage";

const App = () => {
  return (
    <div className="w-full">
      <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route path="/" element={<Homepage />} />
      </Routes>
    </div>
  );
};

export default App;
