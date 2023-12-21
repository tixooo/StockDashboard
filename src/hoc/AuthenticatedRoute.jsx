import { Navigate, useLocation } from "react-router-dom";

export default function AuthenticatedRoute({ children }) {
    let location = useLocation();

    if (user === null) {
        return <Navigate to="login" state={{ from: location.pathname }}></Navigate>
    }

    return children;
}
