import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "@/components/ui/nav";
import { Dashboard } from "@/components/dashboard";
import { Employee } from "@/components/employee";
import { Tasks } from "@/components/tasks";
import Employeedash from "@/components/employeedash";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/employee" element={<Employee />} />
        <Route path="/task" element={<Tasks />} /> 
        <Route path="/employeedash" element={<Employeedash />} />
       
      </Routes>
    </Router>
  );
}

export default App;