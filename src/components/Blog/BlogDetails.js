import { Button, message } from "antd";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { deleteBlog, getBlog } from "../../services/BlogService";

const BlogDetails = () => {
   const { id } = useParams();
   const [blog, setBlog] = useState({});
   const navigate = useNavigate();
   const role = useSelector((state) => state.user.role);

   useEffect(() => {
      getBlog(id).then((b) => setBlog(b));
   }, [id]);

   const onEditClick = () => {
      navigate("/edit-blog/" + id);
   };

   const onHistoryClick = () => {
      navigate("/blog-history/" + id);
   };

   const onDeleteClick = () => {
      deleteBlog(id).then(() => {
         message.info("Blog deleted");
         navigate(-1);
      });
   };

   return (
      <div>
         {role &&
            (role.name === "ADMIN" ||
               (role.name === "SUPER_ADMIN" && (
                  <div>
                     <Button type="success" onClick={onEditClick}>
                        Edit
                     </Button>
                     <Button type="danger" onClick={onDeleteClick}>
                        Delete
                     </Button>
                     <Button type="success" onClick={onHistoryClick}>
                        History
                     </Button>
                  </div>
               )))}

         <h2>{blog.title}</h2>
         <h3>{blog.description}</h3>
         <p>{blog.content}</p>
         <p>{blog.user && blog.user.username}</p>
      </div>
   );
};

export default BlogDetails;
