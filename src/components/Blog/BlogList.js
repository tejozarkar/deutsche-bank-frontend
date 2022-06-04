import { Col, Empty, Row } from "antd";
import React from "react";
import { publish } from "../../services/BlogService";
import Blog from "./Blog";

const BlogList = ({ blogs, loading, remove, showApproval }) => {
   const onPublish = (id) => {
      publish(id).then(() => {
         remove(id);
      });
   };

   return (
      <>
         {blogs && blogs.length ? (
            <Row gutter={[16, 16]}>
               {blogs.map((blog, i) => (
                  <Col key={i} span={6}>
                     <Blog blog={blog} loading={loading} onPublish={onPublish} showApproval={showApproval} />
                  </Col>
               ))}
            </Row>
         ) : (
            <Empty />
         )}
      </>
   );
};

export default BlogList;
