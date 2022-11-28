import Login from "./Routes/Login";
import StudentMainPage from "./components/StudentMainPage";
import AdminLogin from "./Routes/AdminLogin";
import AdminPage from "./Routes/AdminPage";
import StudentPage from "./Routes/StudentPage";
import Homepage from "./Routes/Homepage";
import GpaCalculator from "./Routes/GpaCalculator"
import { 
  BrowserRouter,
   Routes,
   Route,
   Link 
  } from "react-router-dom";

function App() {
  return (
  <Routes>
  <Route path="/" element= {<Homepage />} />
  <Route path="/studentLogin" element= {<Login />} />
  <Route path="/adminLogin" element= {<AdminLogin />} />
  <Route path="/adminMainPage" element= {<AdminPage />} />
  <Route path="/studentMainPage" element= {<StudentPage />} />
  <Route path="/gpaCalculator" element = {<GpaCalculator />} />
  </Routes>
);
}

export default App;
