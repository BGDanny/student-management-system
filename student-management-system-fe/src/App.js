import Login from "./Routes/Login";
import StudentMainPage from "./components/StudentMainPage";
import AdminLogin from "./Routes/AdminLogin";
import AdminPage from "./Routes/AdminPage";
import StudentPage from "./Routes/StudentPage";

import { 
  BrowserRouter,
   Routes,
   Route,
   Link 
  } from "react-router-dom";

function App() {
  return (
  <Routes>
  <Route path="/studentLogin" element= {<Login />} />
  <Route path="/adminLogin" element= {<AdminLogin />} />
  <Route path="/adminMainPage" element= {<AdminPage />} />
  <Route path="/studentMainPage" element= {<StudentPage />} />
  </Routes>
);
}

export default App;
