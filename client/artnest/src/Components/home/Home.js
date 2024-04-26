import React from "react";
import { Box, Button } from "@mui/material";
import "./home.css";
import logo from "../../assets/artnest_logo.png";
import search from "../../assets/search_icon_n.png";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import { useSelector, useDispatch } from "react-redux";
import { activeUser, openLoginDialog } from "../../redux/user/actions";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Home() {
  const [open, setopen] = useState(false);
  const dispatch = useDispatch();
  const active_user = useSelector((state) => state.user.active_user);
  const token = useSelector((state) => state.user.token);
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    dispatch(activeUser(""));
    navigate("/");
  };
  useEffect(() => {
    console.log("active_user" + active_user);
  }, [active_user]);

  const openDialog = () => {
    setopen(true);
  };
  return (
    <>
      <div className="navbar">
        <div className="logo_block">
          <div className="img">
            <img src={logo} alt="artnest_logo" />
            <text className="dancing-script-artnest ">ArtNest</text>
          </div>
        </div>
        <div className="searchBar_block">
          <input type="text" placeholder="Search.." />

          <div className="category">
            <ul class="category-list">
              <li>Abstract Art</li>
              <li>Modern Art</li>
              <li>Dirty Art</li>
              <li>Comtempory Art</li>
            </ul>
          </div>
        </div>
        <div className="other_block">
          <div className="combined">
            {active_user ? (
              <button className="login-button" onClick={() => handleLogout()}>
                LogOut
              </button>
            ) : (
              <button
                className="login-button"
                onClick={() => dispatch(openLoginDialog())}
              >
                Login
              </button>
            )}

            <text>/</text>
            <button className="signup-button">Signup</button>
          </div>

          <div className="heart">
            <FavoriteBorderOutlinedIcon style={{ background: "white" }} />
          </div>
          <div className="cart">
            <ShoppingCartIcon style={{ background: "white" }} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
