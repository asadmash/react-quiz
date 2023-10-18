import "../styles/App.css";
import Layout from "./Layout";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";
import Login from "./pages/Login";
import { AuthProvider } from "../contexts/AuthContext";
import { BrowserRouter, Route, Outlet, Link, Routes } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/signup"
              element={
                <PublicRoute>
                  <Signup />
                </PublicRoute>
              }
            />
            <Route
              path="/login"
              element={
                <PublicRoute>
                  <Login />
                </PublicRoute>
              }
            />
            <Route
              path="/quiz"
              element={
                // Use a function to decide whether to render Quiz or navigate to login
                <PrivateRoute>
                  <Quiz />
                </PrivateRoute>
              }
            />
            <Route
              path="/result"
              element={
                // Use a function to decide whether to render Result or navigate to login
                <PrivateRoute>
                  <Result />
                </PrivateRoute>
              }
            />
          </Routes>
        </Layout>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;

// import "../styles/App.css";
// import Layout from "./Layout";
// import Home from "./pages/Home";
// import Signup from "./pages/Signup";
// import Quiz from "./pages/Quiz";
// import Result from "./pages/Result";
// import Login from "./pages/Login";
// import { AuthProvider } from "../contexts/AuthContext";
// import { BrowserRouter, Route, Outlet, Link, Routes } from "react-router-dom";

// import PrivateRoute from "./PrivateRoute";
// import PublicRoute from "./PublicRoute";

// function App() {
//   return (
//     <BrowserRouter>
//       <AuthProvider>
//         <Layout>
//           <Routes>
//             <Route path="/" element={<Home />} />

//             <Route
//               exact
//               path="/signup"
//               element={
//                 <PublicRoute>
//                   <Signup />
//                 </PublicRoute>
//               }
//             />
//             <Route
//               exact
//               path="/login"
//               element={
//                 <PublicRoute>
//                   <Login />
//                 </PublicRoute>
//               }
//             />
//             <Route
//               exact
//               path="/quiz"
//               element={
//                 <PrivateRoute>
//                   <Quiz />
//                 </PrivateRoute>
//               }
//             />
//             <Route
//               exact
//               path="/result"
//               element={
//                 <PrivateRoute>
//                   <Result />
//                 </PrivateRoute>
//               }
//             />
//           </Routes>
//         </Layout>
//       </AuthProvider>
//     </BrowserRouter>
//   );
// }

// export default App;

// function App() {
//   return (
//     <Router>
//       <Fragment>
//         <AuthProvider>
//           <Layout>
//             <Routes>
//               <Route exact path="/" Component={Home} />

//               <Route
//                 exact
//                 path="/signup"
//                 element={
//                   <PublicRoute>
//                     <Signup />
//                   </PublicRoute>
//                 }
//               />
//               <Route
//                 exact
//                 path="/login"
//                 element={
//                   <PublicRoute>
//                     <Login />
//                   </PublicRoute>
//                 }
//               />
//               <Route
//                 exact
//                 path="/quiz"
//                 element={
//                   <PrivateRoute>
//                     <quiz />
//                   </PrivateRoute>
//                 }
//               />
//               <Route
//                 exact
//                 path="/result"
//                 element={
//                   <PrivateRoute>
//                     <Result />
//                   </PrivateRoute>
//                 }
//               />
//             </Routes>
//           </Layout>
//         </AuthProvider>
//       </Fragment>
//     </Router>
//   );
// }
