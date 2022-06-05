import { UserOutlined } from "@ant-design/icons";
import { Button, Tag } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { setUserRole } from "../redux/userSlice";
import "./../styles/Header.scss";

const Header = () => {
   const role = useSelector((state) => state.user.role);
   const dispatch = useDispatch();
   const [menus, setMenus] = useState([
      {
         title: "Login",
         route: "/auth/login",
      },
      {
         title: "Signup",
         route: "/auth/signup",
      },
   ]);
   const navigate = useNavigate();

   useEffect(() => {
      if (role)
         switch (role.name) {
            case "USER":
               setMenus([
                  {
                     title: "Home",
                     route: "/",
                  },
               ]);
               break;
            case "ADMIN":
               setMenus([
                  {
                     title: "Home",
                     route: "/",
                  },
                  {
                     title: "New Blog",
                     route: "/create",
                  },
                  {
                     title: "My Blogs",
                     route: "/my-blogs",
                  },
               ]);
               break;
            case "SUPER_ADMIN":
               setMenus([
                  {
                     title: "Home",
                     route: "/",
                  },
                  {
                     title: "New Blog",
                     route: "/create",
                  },
                  {
                     title: "My Blogs",
                     route: "/my-blogs",
                  },
                  {
                     title: "Approvals",
                     route: "/approvals",
                  },
               ]);
               break;
            default:
               setMenus([
                  {
                     title: "Login",
                     route: "/auth/login",
                  },
                  {
                     title: "Signup",
                     route: "/auth/signup",
                  },
               ]);
         }
   }, [role]);

   const onLogout = () => {
      localStorage.removeItem("jwt-token");
      dispatch(setUserRole(null));
      setMenus([
         {
            title: "Login",
            route: "/auth/login",
         },
         {
            title: "Signup",
            route: "/auth/signup",
         },
      ]);
      navigate("/auth/login");
   };

   const gotoHome = () => {
      navigate("/");
   };

   return (
      <div className="header-wrap">
         <div className="inner-wrap">
            <h3 className="logo" onClick={gotoHome}>
               Deutsche
            </h3>
            {menus && menus.length && (
               <div style={{ marginLeft: "10px" }}>
                  {menus.map((menu, i) => (
                     <NavLink key={i} to={menu.route} className={({ isActive }) => (isActive ? "active" : "inactive")}>
                        {menu.title}
                     </NavLink>
                  ))}
               </div>
            )}
         </div>
         {role && role.name && (
            <div className="inner-wrap">
               {role.name === "USER" && <Tag color="magenta">Reader</Tag>}
               {role.name === "ADMIN" && <Tag color="red">Admin</Tag>}
               {role.name === "SUPER_ADMIN" && <Tag color="cyan">Super Admin</Tag>}
               <UserOutlined /> <Button onClick={onLogout}>Logout</Button>
            </div>
         )}
      </div>
   );
};

export default Header;
