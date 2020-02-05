import React from "react";
import { Layout, Menu, Icon } from "antd";

const { Header, Content, Footer, Sider } = Layout;

function detectmob() {
  if (
    navigator.userAgent.match(/Android/i) ||
    navigator.userAgent.match(/webOS/i) ||
    navigator.userAgent.match(/iPhone/i) ||
    navigator.userAgent.match(/iPad/i) ||
    navigator.userAgent.match(/iPod/i) ||
    navigator.userAgent.match(/BlackBerry/i) ||
    navigator.userAgent.match(/Windows Phone/i)
  ) {
    return true;
  } else {
    return false;
  }
}

export default function MainPage(props) {
  const leftSlider = (
    <Content>
      <div style={{ padding: 24, background: "#fff", minHeight: 360 }}>
        <img
          src="https://preview.redd.it/xdlzx5nj1noz.jpg?auto=webp&s=bd7aac2fbd7375d4c09d6ea792ba712c31e5f6ea"
          width="100%"
        />
        <img
          src="https://preview.redd.it/xdlzx5nj1noz.jpg?auto=webp&s=bd7aac2fbd7375d4c09d6ea792ba712c31e5f6ea"
          width="100%"
        />
        <img
          src="https://preview.redd.it/xdlzx5nj1noz.jpg?auto=webp&s=bd7aac2fbd7375d4c09d6ea792ba712c31e5f6ea"
          width="100%"
        />
      </div>
    </Content>
  );

  const mainContent = (
    <Content>
      <div style={{ padding: 24, background: "#fff", minHeight: 360 }}>
        <img
          src="https://preview.redd.it/xdlzx5nj1noz.jpg?auto=webp&s=bd7aac2fbd7375d4c09d6ea792ba712c31e5f6ea"
          width="100%"
        />
      </div>
    </Content>
  );

  return detectmob() ? (
    <Layout>
      <Sider theme="light" width="90%" breakpoint="lg" collapsedWidth="0">
        {leftSlider}
      </Sider>
      <Layout>
        {mainContent}
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  ) : (
    <Layout style={{ width: "70%", margin: "auto", backgroundColor: "#fff" }}>
      <Sider
        theme="light"
        width="20%"
        style={{
          overflow: "auto",
          height: "100vh",
          position: "fixed"
        }}
      >
        {leftSlider}
      </Sider>
      <Layout style={{ marginLeft: "30%" }}>
        {mainContent}
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
}
