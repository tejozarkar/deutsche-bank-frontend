import { Button, Form, Input } from "antd";
import { useNavigate } from "react-router-dom";
import { create } from "../../../services/BlogService";

const Create = () => {
   const [form] = Form.useForm();
   const navigate = useNavigate();

   const onFormSubmit = (content) => {
      create(content)
         .then((newBlog) => {
            if (newBlog.id) {
               navigate("/");
            }
         })
         .catch(() => {});
   };

   return (
      <Form form={form} layout="vertical" onFinish={onFormSubmit} initialValues={{ requiredMarkValue: "Required" }}>
         <Form.Item label="Title" name="title" required>
            <Input placeholder="Enter title" />
         </Form.Item>
         <Form.Item label="Description" name="description" required>
            <Input placeholder="Enter description" />
         </Form.Item>
         <Form.Item
            name="content"
            label="Content"
            rules={[
               {
                  required: true,
                  message: "Please input Intro",
               },
            ]}>
            <Input.TextArea showCount rows={10} />
         </Form.Item>
         <Form.Item>
            <Button type="primary" htmlType="submit">
               Submit
            </Button>
         </Form.Item>
      </Form>
   );
};

export default Create;
