import { Routes, Route } from "react-router-dom";
import Main from "./pages/main";
import Circle from "./pages/circle";

function App() {
  return (
    <Routes>
      <Route index path="/" element={<Main />} />
      <Route index path="/circle" element={<Circle />} />
    </Routes>
  );
}

export default App;
