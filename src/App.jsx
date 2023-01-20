import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Retex from "./pages/Retex"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/retex/:id" element={<Retex />} />
      <Route path="*" element={<h1>404</h1>} />
    </Routes>
  )
}

export default App
