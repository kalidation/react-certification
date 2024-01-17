import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Result } from "./pages/Result/Result";
import { URLS } from "./pages/routes";

function App() {
  return (
    <div className="container">
      <Routes>
        <Route index path={URLS.HOME_URL} element={<Home />} />
        <Route path={URLS.RESULT_URL} element={<Result />} />
      </Routes>
    </div>
  );
}

export default App;
