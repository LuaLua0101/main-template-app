import React, { useEffect } from "react";
import { Form, Icon, Input, Button } from "antd";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import useFormInput from "../../../utils/useFormInput";
import CKFinder from "@ckeditor/ckeditor5-ckfinder/src/ckfinder";

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

// ClassicEditor
//     .create( document.querySelector( '#editor' ), {
//         plugins: [ CKFinder, ... ],

//         // Enable the "Insert image" button in the toolbar.
//         toolbar: [ 'imageUpload', ... ],

//         ckfinder: {
//             // Upload the images to the server using the CKFinder QuickUpload command.
//             uploadUrl: 'https://example.com/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Images&responseType=json'
//         }
//     } )

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
        <CKEditor
          editor={ClassicEditor}
          data={content.value}
          onInit={editor => {
            console.log("Editor is ready to use!", editor);
          }}
          onChange={(event, editor) => {
            const data = editor.getData();
            content.setValue(data);
          }}
          onBlur={(event, editor) => {
            console.log("Blur.", editor);
          }}
          onFocus={(event, editor) => {
            console.log("Focus.", editor);
          }}
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
