import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/authSlice";

function Navbar() {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  return (
    <nav>
      <Link to="/events">Event Feed</Link>
      <Link to="/create">Create Event</Link>
      {user ? (
        <>
          <span>{user.name}</span>
          <button onClick={() => dispatch(logout())}>Logout</button>
        </>
      ) : (
        <a href="http://localhost:5000/auth/google">Login with Google</a>
      )}
    </nav>
  );
}

export default Navbar;
