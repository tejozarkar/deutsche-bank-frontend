import { FullscreenOutlined, UploadOutlined } from "@ant-design/icons";
import { Avatar, Button, Tag } from "antd";
import React from "react";
import Moment from "react-moment";
import { useNavigate } from "react-router-dom";
import "./../../styles/Blog.scss";

const Blog = ({ blog, loading, onPublish, showApproval, hideStatus }) => {
   const navigate = useNavigate();
   const showBlogDetails = () => {
      navigate("/blog/" + blog.id);
   };
   return (
      <div className="custom-card">
         <div>
            <h3 className="title">{blog.title}</h3>
            <p className="creation-date">
               <Moment format="DD MMM YYYY">{blog.createdAt}</Moment>
            </p>
            <p className="description">{blog.description}</p>
            {!hideStatus && (
               <div style={{ marginBottom: "20px" }}>
                  <label className="label">Status: </label>
                  {blog.status === "UNDER_REVIEW" && <Tag color="#2db7f5">Under Review</Tag>}
                  {blog.status === "PUBLISHED" && <Tag color="#87d068">Published</Tag>}
               </div>
         )} 
         </div>
         <div className="user">
            {blog && blog.username && (
               <div className="inner-wrap">
                  <Avatar style={{ color: "#f56a00", backgroundColor: "#fde3cf" }}>{blog.username[0].toUpperCase()}</Avatar>
                  <h5 className="username">{blog.username.charAt(0).toUpperCase() + blog.username.slice(1)}</h5>
               </div>
            )}
            <div className="inner-wrap">
               <Button icon={<FullscreenOutlined />} onClick={showBlogDetails}>
                  View
               </Button>
               {showApproval && (
                  <Button type="dashed" danger icon={<UploadOutlined />} onClick={() => onPublish(blog.id)}>
                     Publish
                  </Button>
               )}
            </div>
         </div>
      </div>
   );
};

export default Blog;
