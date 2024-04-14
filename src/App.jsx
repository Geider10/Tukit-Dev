import { Router, Route, BrowserRouter, Routes } from "react-router-dom"
import { Home } from "./components/Home"
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/resource/:id"></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
