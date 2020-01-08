import React, { useEffect } from "react";
import { Form, Icon, Input, Button } from "antd";
import "jodit";
import "jodit/build/jodit.min.css";
import JoditEditor from "jodit-react";
import useFormInput from "../../../utils/useFormInput";
import { SERVER } from "../../../utils/constants";

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 }
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 }
  }
};

const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0
    },
    sm: {
      span: 16,
      offset: 8
    }
  }
};
const Detail = props => {
  const content = useFormInput();
  const handleSubmit = e => {
    e.preventDefault();
    console.log(content);
  };

  return (
    <Form {...formItemLayout} onSubmit={handleSubmit}>
      <Form.Item label="Tiêu đề">
        <Input placeholder="Username" />
      </Form.Item>
      <Form.Item label="Tiêu đề">
        <Input placeholder="Username" />
      </Form.Item>
      <Form.Item label="Tiêu đề">
        <JoditEditor
          config={{
            readonly: false,
            enableDragAndDropFileToEditor: true,
            uploader: { url: SERVER + "api/upload-img" }
          }}
          {...content}
        />
      </Form.Item>
      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Detail;
