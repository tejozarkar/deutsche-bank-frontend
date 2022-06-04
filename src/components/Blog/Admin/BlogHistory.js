import { Collapse, Empty } from "antd";
import CollapsePanel from "antd/lib/collapse/CollapsePanel";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getBlogHistory } from "../../../services/BlogService";

const BlogHistory = () => {
   const { id } = useParams();
   const [history, setHistory] = useState([]);

   useEffect(() => {
      getBlogHistory(id).then((h) => {
         setHistory(h);
      });
   }, [id]);
   return (
      <div>
         {history.length > 0 && (
            <Collapse defaultActiveKey={["0"]}>
               {history.length &&
                  history.map((item, i) => (
                     <CollapsePanel header={`Edit: ${i + 1} - ${item.title}`} key={i}>
                        <h5>{item.description}</h5>
                        <p>{item.content}</p>
                     </CollapsePanel>
                  ))}
            </Collapse>
         )}
         {!history.length && <Empty />}
      </div>
   );
};

export default BlogHistory;
