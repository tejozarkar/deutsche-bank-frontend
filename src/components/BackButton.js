import { ArrowLeftOutlined } from "@ant-design/icons";
import { Button } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";

const BackButton = () => {
   const navigate = useNavigate();
   const back = () => {
      navigate(-1);
   };
   return (
      <div style={{ marginBottom: "20px" }}>
         <Button type="text" icon={<ArrowLeftOutlined />} size="large" style={{ color: "#78938A", marginButton: "20px" }} onClick={back}>
            Back
         </Button>
      </div>
   );
};

export default BackButton;
