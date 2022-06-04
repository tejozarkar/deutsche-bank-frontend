import React from "react";
import { Form, Input, Button } from "antd";

const LoginStep1 = ({ onFormSubmit }) => {
   const [form] = Form.useForm();

   return (
      <Form form={form} layout="vertical" onFinish={onFormSubmit} initialValues={{ requiredMarkValue: "Required" }}>
         <Form.Item label="Username" name="username" required>
            <Input placeholder="Enter username" />
         </Form.Item>
         <Form.Item>
            <Button type="primary" htmlType="submit">
               Submit
            </Button>
         </Form.Item>
      </Form>
   );
};

export default LoginStep1;
