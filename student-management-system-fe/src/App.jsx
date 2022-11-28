import Login from "./Routes/Login";
import AdminLogin from "./Routes/AdminLogin";
import AdminPage from "./Routes/AdminPage";
import StudentPage from "./Routes/StudentPage";
import { ChakraProvider } from "@chakra-ui/react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
    return (
        <ChakraProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/studentLogin" element={<Login />} />
                    <Route path="/adminLogin" element={<AdminLogin />} />
                    <Route path="/adminPage" element={<AdminPage />} />
                    <Route path="/studentPage" element={<StudentPage />} />
                </Routes>
            </BrowserRouter>
        </ChakraProvider>
    );
}

export default App;
