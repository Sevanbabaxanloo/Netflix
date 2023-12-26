import React from "react";
import logo from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const style = {
  logo: `w-[100px] max-sm:w-[70px] cursor-pointer`,
  mainContainer: `flex items-center px-[32px] max-sm:px-[5px] py-[24px]`,
  navContainer: `flex items-center justify-between w-full`,
  // If style.text and style.nav are not used elsewhere, consider removing them
  container: `flex items-center`,
  icons: `text-white`,
  singin: `font-sans text-white bg-red-500 p-[5px] m-[5px] w-[80px] rounded-[5px] max-sm:text-[12px]  max-sm:w-[55px]`,
  navPosition: `z-[100] w-full absolute`,
};

const Navbar = () => {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={style.navPosition}>
      <div className={style.mainContainer}>
        <div className={style.navContainer}>
          <div>
            <Link to="/">
              <img src={logo} alt="Logo" className={style.logo} />
            </Link>
          </div>
          <div className={style.container}>
            {user?.email ? (
              <div>
                <Link to="/account">
                  <button className={style.singin}>Account</button>
                </Link>
                <button onClick={handleSignOut} className={style.singin}>
                  Logout
                </button>
              </div>
            ) : (
              <div>
                <Link to="/login">
                  <button className={style.singin}>Sing in</button>
                </Link>
                <Link to="/singup">
                  <button className={style.singin}>Sing up</button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
