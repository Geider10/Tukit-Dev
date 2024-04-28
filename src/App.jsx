import { Route, BrowserRouter, Routes } from "react-router-dom"
import { Home } from "./components/Home"
import { StateAssets } from "./context/StateAssets"
function App() {
  return (
    <StateAssets>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
      </Routes>
     </BrowserRouter>
    </StateAssets>
  )
}

export default App
