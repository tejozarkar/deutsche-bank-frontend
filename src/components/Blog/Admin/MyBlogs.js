import React, { useEffect, useState } from "react";
import { getMyBlogs } from "../../../services/BlogService";
import BlogList from "../BlogList";

const MyBlogs = () => {
   const [blogs, setBlogs] = useState([{}, {}, {}, {}]);
   const [loading, setLoading] = useState(true);
   useEffect(() => {
      getMyBlogs().then((b) => {
         setBlogs(b);
         setLoading(false);
      });
   }, []);
   return (
      <div>
         <BlogList blogs={blogs} loading={loading} />
      </div>
   );
};

export default MyBlogs;
