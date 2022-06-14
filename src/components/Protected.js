// import Navigate from "@tanstack/react-location";
import { Navigate } from "@tanstack/react-location";

const Protected = ({ isLoggedIn, children }) => {
    if (!isLoggedIn) {
        return <Navigate to="/" />;
    }
    return children;
};
export default Protected;