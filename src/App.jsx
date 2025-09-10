import { BrowserRouter, Routes, Route} from "react-router-dom";
import LoginPage from "./pages/Login"
import HomePage from "./pages/HomePage"
import { UserContextProvider } from "./contexts/UserContext";
import ReceptionistPage from "./pages/ReceptionistPage";
import DoctorPage from "./pages/DoctorPage";

function App() {

  return (
    <>
      <UserContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/login" element={<LoginPage/>} />
            <Route path="/receptionist" element={<ReceptionistPage/>} />
            <Route path="/doctor" element={<DoctorPage/>} />
          </Routes>
        </BrowserRouter>
      </UserContextProvider>
    </>
  )
}

export default App