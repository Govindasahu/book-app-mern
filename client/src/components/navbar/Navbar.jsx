import { Link, useNavigate } from "react-router-dom";
import "./navbar.css";
import { AuthContext } from "../../context/AuthContext";
import { useContext, useState } from "react";
import { Avatar } from "@mui/material";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "10%",
  right: "0",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Navbar = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const logoutHandle = () => {
    localStorage.removeItem("user");
    navigate("/");
    window.location.reload();
  };

  return (
    <div className="navbar">
      <div className="navContainer">
        <div className="logo">
          <Link to="/">
            <h2>HOTEL BOOKING</h2>
          </Link>
        </div>

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            {user ? (
              <div className="userExist">
                <p> {user.username}</p>
                <button className="logoutBtn" onClick={logoutHandle}>
                  LOGOUT
                </button>
              </div>
            ) : (
              <div className="navItems">
                <Link to="/signup">
                  <button className="btn1">Register</button>
                </Link>
                <Link to="/login">
                  <button className="btn2">Login</button>
                </Link>
              </div>
            )}
          </Box>
        </Modal>
        <Avatar onClick={handleOpen} />
      </div>
    </div>
  );
};

export default Navbar;
