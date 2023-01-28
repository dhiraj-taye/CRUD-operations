import Create from "./components/Create";
import Read from "./components/Read";
import Update from "./components/Update";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route excat path="/" element={<Create />}></Route>
          <Route excat path="/read" element={<Read />}></Route>
          <Route excat path="/edit" element={<Update />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
