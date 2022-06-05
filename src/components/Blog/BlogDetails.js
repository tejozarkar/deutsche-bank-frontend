import { DeleteOutlined, EditOutlined, ExclamationCircleOutlined, HistoryOutlined } from "@ant-design/icons";
import { Avatar, Button, Col, message, Row } from "antd";
import confirm from "antd/lib/modal/confirm";
import React, { useEffect, useState } from "react";
import Moment from "react-moment";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { deleteBlog, getBlog } from "../../services/BlogService";
import BackButton from "../BackButton";
import "./../../styles/BlogDetails.scss";

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
      confirm({
         title: "Do you Want to delete this blog?",
         icon: <ExclamationCircleOutlined style={{ color: "red" }} />,

         onOk() {
            deleteBlog(id).then(() => {
               message.info("Blog deleted");
               navigate(-1);
            });
         },
         onCancel() {
            console.log("Cancel");
         },
      });
   };

   return (
      <div className="details-wrap">
         <BackButton />
         <Row gutter={[16, 16]}>
            <Col span={16}>
               <div className="blog-details">
                  <h2 className="blog-title">{blog.title}</h2>
                  <h3 className="blog-description">{blog.description}</h3>
                  <p className="blog-content">{blog.content}</p>
               </div>
            </Col>
            <Col span={6}>
               <div className="metadata-wrap">
                  {blog && blog.user && blog.user.username && (
                     <div>
                        <div className="user-wrap">
                           <div className="user-details">
                              <Avatar style={{ color: "#f56a00", backgroundColor: "#fde3cf" }} size="large">
                                 {blog.user.username[0].toUpperCase()}
                              </Avatar>
                              <div style={{ marginLeft: "10px" }}>
                                 <h5 className="username">{blog.user.username.charAt(0).toUpperCase() + blog.user.username.slice(1)}</h5>
                                 <p style={{ marginBottom: "0px" }}>{blog.user.email}</p>
                              </div>
                           </div>
                        </div>
                     </div>
                  )}
                  <div className="gapper">
                     <label className="label">Created at: </label> <Moment format="DD MMM YYYY">{blog.createdAt}</Moment>
                  </div>

                  <div className="gapper">
                     <label className="label">Last modified at: </label> <Moment format="DD MMM YYYY">{blog.modified}</Moment>
                  </div>
                  <div className="gapper">
                     {role && (role.name === "ADMIN" || role.name === "SUPER_ADMIN") && (
                        <>
                           <label className="label">Actions: </label>
                           <div className="sequential-buttons">
                              <Button type="success" icon={<EditOutlined />} onClick={onEditClick}>
                                 Edit
                              </Button>
                              <Button type="dashed" danger icon={<HistoryOutlined />} onClick={onHistoryClick}>
                                 History
                              </Button>
                              <Button type="danger" icon={<DeleteOutlined />} onClick={onDeleteClick}>
                                 Delete
                              </Button>
                           </div>
                        </>
                     )}
                  </div>
               </div>
            </Col>
         </Row>
      </div>
   );
};

export default BlogDetails;
