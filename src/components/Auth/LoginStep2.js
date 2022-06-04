import { Button, Form, Input } from "antd";
import React from "react";

const LoginStep2 = ({ username, question, onFormSubmit }) => {
   const [form] = Form.useForm();

   return (
      <Form form={form} layout="vertical" onFinish={onFormSubmit} initialValues={{ requiredMarkValue: "Required", username: username, question: question }}>
         <Form.Item label="Username" name="username">
            <Input disabled />
         </Form.Item>
         <Form.Item label="Security Question" name="question">
            <Input disabled />
         </Form.Item>
         <Form.Item label="Security Answer" name="securityAnswer">
            <Input required placeholder="Enter Answer" />
         </Form.Item>
         <Form.Item label="Password" name="password">
            <Input required placeholder="Enter password" type="password" />
         </Form.Item>
         <Form.Item>
            <Button type="primary" htmlType="submit">
               Submit
            </Button>
         </Form.Item>
      </Form>
   );
};

export default LoginStep2;
