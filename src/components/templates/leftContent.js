import React from "react";
import { Layout, Menu, Icon, Avatar } from "antd";
import { Card } from "antd";
import DynamicImport from "../../utils/lazyImport";
import Footer from "../atoms/footer";

const MainContent = DynamicImport(() => import("../organisms/mainContent"));
const ImageList = DynamicImport(() => import("../organisms/imageList"));
const { Meta } = Card;
const { Header, Content, Sider } = Layout;
const { SubMenu } = Menu;

export default function LeftContent(props) {
  return (
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
        <ImageList />
      </Sider>
      <Layout style={{ marginLeft: "30%" }}>
        <MainContent />
        <Footer />
      </Layout>
    </Layout>
  );
}
