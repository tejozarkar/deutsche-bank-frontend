import { Col, Divider, Empty, Row } from "antd";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { publish } from "../../services/BlogService";
import Blog from "./Blog";

const BlogList = ({ blogs, loading, remove, showApproval, sortByAuthor, sortByDate, hideStatus }) => {
   const [byAuthor, setByAuthor] = useState({});
   const [byDate, setByDate] = useState({ Today: [], Yesterday: [] });

   useEffect(() => {
      const map = {};
      if (sortByAuthor) {
         blogs.forEach((blog) => {
            if (blog.username in map) {
               map[blog.username].push(blog);
            } else {
               map[blog.username] = [blog];
            }
         });
      }
      setByAuthor(map);
   }, [sortByAuthor, blogs]);

   useEffect(() => {
      const map = {};
      if (sortByDate) {
         const today = moment(new Date()).format("DD MMM YYYY").toString();
         const yesterday = moment(new Date()).subtract(1, "days").format("DD MMM YYYY").toString();
         blogs.forEach((blog) => {
            const date = moment(blog.createdAt).format("DD MMM YYYY").toString();
            const key = date === today ? "Today" : date === yesterday ? "Yesterday" : date;
            if (key in map) {
               map[key].push(blog);
            } else {
               map[key] = [blog];
            }
         });
      }
      setByDate(map);
   }, [sortByDate, blogs]);

   const onPublish = (id) => {
      publish(id).then(() => {
         remove(id);
      });
   };

   return (
      <>
         {sortByAuthor &&
            Object.keys(byAuthor).map((key) => {
               return (
                  <div>
                     <Divider orientation="left">{key[0].toUpperCase() + key.slice(1)}</Divider>
                     <Row gutter={[16, 16]}>
                        {byAuthor[key].map((blog, i) => (
                           <Col key={i} span={6} style={{ marginBottom: "10px" }}>
                              <Blog hideStatus={hideStatus} blog={blog} loading={loading} onPublish={onPublish} showApproval={showApproval} />
                           </Col>
                        ))}
                     </Row>
                  </div>
               );
            })}
         {sortByDate &&
            Object.keys(byDate).map((key) => {
               return (
                  <div>
                     <Divider orientation="left">{key[0].toUpperCase() + key.slice(1)}</Divider>
                     <Row gutter={[16, 16]}>
                        {byDate[key].map((blog, i) => (
                           <Col key={i} span={6} style={{ marginBottom: "10px" }}>
                              <Blog hideStatus={hideStatus} blog={blog} loading={loading} onPublish={onPublish} showApproval={showApproval} />
                           </Col>
                        ))}
                     </Row>
                  </div>
               );
            })}

         {!sortByAuthor && !sortByDate && blogs && blogs.length > 0 ? (
            <Row gutter={[16, 16]}>
               {blogs.map((blog, i) => (
                  <Col key={i} span={6}>
                     <Blog hideStatus={hideStatus} blog={blog} loading={loading} onPublish={onPublish} showApproval={showApproval} />
                  </Col>
               ))}
            </Row>
         ) : (
            !sortByAuthor && !sortByDate && <Empty />
         )}
      </>
   );
};

export default BlogList;
