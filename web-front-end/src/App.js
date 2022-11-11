import './App.css';
import Register from './Register';
import Login from './Login';
import Groups from './Groups';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  return (
    <Router>
    <Routes>
      <Route exact path="/" element={<Login/>}/>
      <Route exact path="/register" element={<Register/>}/> 
      <Route exact path="/groups" element={<Groups/>}/>
    </Routes>
    </Router>
  );
}

export default App;
