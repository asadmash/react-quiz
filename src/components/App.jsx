import "../styles/App.css";
import Layout from "./Layout";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";
import { AuthProvider } from "../contexts/AuthContext";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Layout>
          <Routes>
            <Route exact path="/" Component={Home} />
            <Route exact path="/signup" Component={Signup} />
            <Route exact path="/quiz" Component={Quiz} />
            <Route exact path="/result" Component={Result} />
          </Routes>
        </Layout>
      </AuthProvider>
    </Router>
  );
}

export default App;
