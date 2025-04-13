import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCredentials } from "../redux/authSlice";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function AuthSuccess() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("token");
    if (token) {
      axios.get("/api/users/me", {
        headers: { Authorization: `Bearer ${token}` },
      }).then(res => {
        dispatch(setCredentials({ token, user: res.data }));
        navigate("/dashboard");
      });
    }
  }, []);

  return <div>Signing in...</div>;
}

export default AuthSuccess;
