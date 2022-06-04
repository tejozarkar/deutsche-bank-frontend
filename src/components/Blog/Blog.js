import { Button, Card } from "antd";
import React from "react";
import Moment from "react-moment";
import { Link } from "react-router-dom";
import "./../../styles/Blog.scss";

const Blog = ({ blog, loading, onPublish, showApproval }) => {
   return (
      <Card loading={loading} title={blog.title} extra={<Link to={`/blog/${blog.id}`}>View</Link>}>
         <p>{blog.description}</p>
         <div className="card-footer">
            <p>
               <small>Created By: </small>
               {blog.username}
            </p>
            <small>Created By: </small>
            <Moment format="DD MMM YYYY">{blog.createdAt}</Moment>
         </div>
         {showApproval && <Button onClick={() => onPublish(blog.id)}>Publish</Button>}
      </Card>
   );
};

export default Blog;
