
import TopBar from "./component/topbar/TopBar";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const currentUser = false;
  return (
    <Router>
      <TopBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/register" element={currentUser ? <Home /> : <Register />} />
        <Route exact path="/login" element={currentUser ? <Home /> : <Login />} />
        <Route exact path="/write" element={currentUser ? <Write /> : <Login />} />
        <Route exact path="/settings" element={currentUser ? <Settings /> : <Login />} />
        <Route exact path="/post/:postId" element={<Single />} />
      </Routes>
    </Router>
  );
}

export default App;
