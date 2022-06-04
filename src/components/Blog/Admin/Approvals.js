import React, { useEffect, useState } from "react";
import { getUnderReviewBlogs } from "../../../services/BlogService";
import BlogList from "../BlogList";

const Approvals = () => {
   const [blogs, setBlogs] = useState([{}, {}, {}, {}]);
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      getUnderReviewBlogs().then((b) => {
         setBlogs(b);
         setLoading(false);
      });
   }, []);
   const remove = (id) => {
      setBlogs(blogs.filter((b) => b.id !== id));
   };

   return (
      <div>
         <BlogList blogs={blogs} loading={loading} remove={remove} showApproval={true} />
      </div>
   );
};

export default Approvals;
