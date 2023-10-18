import { useAuth } from "../contexts/AuthContext";
import { Route, Navigate } from "react-router-dom";

export default function PrivateRoute({ children }) {
  const { currentUser } = useAuth();

  return currentUser ? children : <Navigate to="/login" />;
}

// import { useAuth } from "../contexts/AuthContext";
// import { Outlet, Navigate, Route } from "react-router-dom";

// export default function PrivateRoute({ children }) {
//   const { currentUser } = useAuth();

//   return currentUser ? <Outlet /> : <Navigate to="/login" />;
// }
