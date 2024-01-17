import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Result } from "./pages/Result/Result";

function App() {
  return (
    <div className="container">
      <Routes>
        <Route index path="/react-certification/" element={<Home />} />
        <Route path="/react-certification/result" element={<Result />} />
      </Routes>
    </div>
  );
}

export default App;
