import React, { useEffect, useState } from "react";
import { getBlogs } from "../services/BlogService";
import BlogList from "./Blog/BlogList";
import { useDispatch } from "react-redux";
import { getMyDetails } from "../services/AuthService";
import { setUserDetails, setUserRole } from "../redux/userSlice";

const Home = () => {
   const dispatch = useDispatch();

   useEffect(() => {
      getMyDetails()
         .then((details) => {
            let highestRole = { id: Number.MAX_SAFE_INTEGER, name: "" };
            details.roles.forEach((role) => {
               if (role.id < highestRole.id) {
                  highestRole = role;
               }
            });
            dispatch(setUserRole(highestRole));
            dispatch(setUserDetails(details));
         })
         .catch((_) => {
            localStorage.removeItem("jwt-token");
         });
   }, [dispatch]);

   const [blogs, setBlogs] = useState([]);
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      getBlogs().then((blogs) => {
         setBlogs(blogs);
         setLoading(false);
      });
   }, []);

   return (
      <div style={{ height: "100%" }}>
         <BlogList blogs={blogs} loading={loading} />
      </div>
   );
};

export default Home;
