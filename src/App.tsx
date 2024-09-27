import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/homepage/Homepage";

function App() {
  return (
    <header className="App-header">
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </header>
  );
}

export default App;
