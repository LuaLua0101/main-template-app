import React, { useEffect } from "react";
import { Form, Icon, Input, Button, Checkbox } from "antd";

const LoginPage = props => {
  useEffect(() => {
    localStorage.hasOwnProperty("@pitech_token") &&
      (window.location.href = "/");
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <Form
      onSubmit={handleSubmit}
      style={{ maxWidth: "300px", margin: "20px auto" }}
    >
      <Form.Item>
        <Input
          prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
          placeholder="Username"
        />
      </Form.Item>
      <Form.Item>
        <Input
          prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Log in
        </Button>
        {/* Or <a href="">register now!</a> */}
      </Form.Item>
    </Form>
  );
};

export default LoginPage;
