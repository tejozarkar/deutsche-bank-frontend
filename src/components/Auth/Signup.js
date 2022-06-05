import { Button, Form, Input, Select } from "antd";
import { Option } from "antd/lib/mentions";
import React from "react";
import { useNavigate } from "react-router-dom";
import { signup } from "../../services/AuthService";

const securityQuestions = ["In what city were you born?", "What is the name of your favorite pet?", "What is your mother's maiden name?", "What high school did you attend?", "What is the name of your first school?", "What was the make of your first car?", "What was your favorite food as a child?"];

const Signup = () => {
   const [form] = Form.useForm();

   const navigate = useNavigate();

   const onFormSubmit = async (values) => {
      await signup(values);
      navigate("/auth/login");
   };

   return (
      <div className="background-wrap">
         <Form form={form} layout="vertical" onFinish={onFormSubmit} initialValues={{ requiredMarkValue: "Required" }}>
            <Form.Item
               name="username"
               label="Username"
               tooltip="What do you want others to call you?"
               rules={[
                  {
                     required: true,
                     message: "Please input your username!",
                  },
                  { max: 255, message: "Max 255 characters allowed." },
               ]}>
               <Input />
            </Form.Item>

            <Form.Item
               name="password"
               label="Password"
               rules={[
                  {
                     required: true,
                     message: "Please input your password!",
                  },
                  { max: 255, message: "Max 255 characters allowed." },
               ]}
               hasFeedback>
               <Input.Password />
            </Form.Item>

            <Form.Item
               name="confirm"
               label="Confirm Password"
               dependencies={["password"]}
               hasFeedback
               rules={[
                  {
                     required: true,
                     message: "Please confirm your password!",
                  },
                  { max: 255, message: "Max 255 characters allowed." },
                  ({ getFieldValue }) => ({
                     validator(_, value) {
                        if (!value || getFieldValue("password") === value) {
                           return Promise.resolve();
                        }

                        return Promise.reject(new Error("The two passwords that you entered do not match!"));
                     },
                  }),
               ]}>
               <Input.Password />
            </Form.Item>

            <Form.Item
               name="email"
               label="E-mail"
               rules={[
                  {
                     type: "email",
                     message: "The input is not valid E-mail!",
                  },
                  {
                     required: true,
                     message: "Please input your E-mail!",
                  },
                  { max: 255, message: "Max 255 characters allowed." },
               ]}>
               <Input />
            </Form.Item>

            <Form.Item
               name="Name"
               label="Name"
               rules={[
                  {
                     required: true,
                     message: "Please input your name!",
                  },
                  { max: 255, message: "Max 255 characters allowed." },
               ]}>
               <Input
                  style={{
                     width: "100%",
                  }}
               />
            </Form.Item>

            <Form.Item
               name="securityQuestion"
               label="Security Question"
               rules={[
                  {
                     required: true,
                     message: "Please select security question!",
                  },
               ]}>
               <Select placeholder="select security question">
                  {securityQuestions.map((question) => (
                     <Option key={question} value={question}>
                        {question}
                     </Option>
                  ))}
               </Select>
            </Form.Item>

            <Form.Item
               name="securityAnswer"
               label="Security Answer"
               tooltip="Remember this answer, it will be asked to you while logging in?"
               rules={[
                  {
                     required: true,
                     message: "Please input security answer!",
                  },
                  { max: 255, message: "Max 255 characters allowed." },
               ]}>
               <Input />
            </Form.Item>

            <Form.Item>
               <Button type="primary" htmlType="submit">
                  Register
               </Button>
            </Form.Item>
         </Form>
      </div>
   );
};

export default Signup;
