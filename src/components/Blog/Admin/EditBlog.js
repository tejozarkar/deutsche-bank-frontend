import { Button, Form, Input } from "antd";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { edit, getBlog } from "../../../services/BlogService";

const EditBlog = () => {
   const [form] = Form.useForm();
   const { id } = useParams();
   const [initialValues, setInitialValues] = useState({});
   const [loading, setLoading] = useState(true);
   const navigate = useNavigate();

   useEffect(() => {
      getBlog(id).then((b) => {
         setLoading(false);
         setInitialValues({
            requiredMarkValue: "Required",
            title: b.title,
            description: b.description,
            content: b.content,
         });
      });
   }, [id]);

   const onFormSubmit = (content) => {
      content = { ...content, id };
      edit(content)
         .then((newBlog) => {
            navigate("/blog/" + id);
         })
         .catch((e) => {
            console.log("exception ", e);
         });
   };

   return (
      <>
         {!loading && (
            <Form form={form} layout="vertical" onFinish={onFormSubmit} initialValues={initialValues}>
               <Form.Item label="Title" name="title" required>
                  <Input placeholder="Enter title" />
               </Form.Item>
               <Form.Item label="Description" name="description" required>
                  <Input placeholder="Enter description" />
               </Form.Item>
               <Form.Item
                  name="content"
                  label="Intro"
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
         )}
      </>
   );
};

export default EditBlog;
