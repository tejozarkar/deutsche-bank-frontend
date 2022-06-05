import { Button, Form, Input } from "antd";
import { useNavigate } from "react-router-dom";
import { create } from "../../../services/BlogService";
import BackButton from "../../BackButton";

const Create = () => {
   const [form] = Form.useForm();
   const navigate = useNavigate();

   const onFormSubmit = (content) => {
      create(content)
         .then((newBlog) => {
            if (newBlog.id) {
               navigate("/my-blogs");
            }
         })
         .catch(() => {});
   };

   return (
      <>
         <BackButton />
         <div className="background-wrap">
            <Form form={form} layout="vertical" onFinish={onFormSubmit} initialValues={{ requiredMarkValue: "Required" }}>
               <Form.Item label="Title" name="title" required rules={[{ max: 255, message: "Max 255 characters allowed." }]}>
                  <Input placeholder="Enter title" />
               </Form.Item>
               <Form.Item label="Description" name="description" required rules={[{ max: 255, message: "Max 255 characters allowed." }]}>
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
         </div>
      </>
   );
};

export default Create;
