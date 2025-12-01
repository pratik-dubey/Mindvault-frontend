import DashBoard from "./pages/DashBoard";
import LandingPage from "./pages/landing-page";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { motion } from "framer-motion";

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/home" element={<LandingPage />} />
        </Routes>
      </BrowserRouter>
      <motion.div
        initial={{ y: -20 }}
        animate={{ y: 0 }}
        transition={{ duration: 1, type: "spring" }}
        className="flex items-center justify-center text-xl font-bold"
      >
        <p className="m-0">
          Welcome to{" "}
          <span className="font-bold bg-gradient-to-r from-blue-800 to-blue-300 bg-clip-text text-transparent">
            Mindvault
          </span>
        </p>
      </motion.div>
    </div>
  );
}

export default App;
