import Register from './Components/Register/Register';
import Login from './Components/Login/Login';
import Groups from './Components/Groups/Groups';
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
