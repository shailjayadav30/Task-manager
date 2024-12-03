import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TaskDashboard from './pages/TaskDashboard';
import "./App.css"
function App() {
  return (

    <Router>
      <Routes>
        <Route path="/" element={<TaskDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
