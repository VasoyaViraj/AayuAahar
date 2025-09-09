import { BrowserRouter, Routes, Route} from "react-router-dom";
import LoginPage from "./pages/Login"
import HomePage from "./pages/HomePage"
import { UserContextProvider } from "./contexts/UserContext";

function App() {

  return (
    <>
      <UserContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/login" element={<LoginPage/>} />
          </Routes>
        </BrowserRouter>
      </UserContextProvider>
    </>
  )
}

export default App