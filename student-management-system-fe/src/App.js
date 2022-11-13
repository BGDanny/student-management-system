import Login from "./Routes/Login";
import StudentMainPage from "./components/StudentMainPage";

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
  </Routes>



);
}

export default App;
