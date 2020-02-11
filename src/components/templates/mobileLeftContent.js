import React from "react";
import { Layout, Menu, Icon, Avatar } from "antd";
import { Card } from "antd";
import Footer from "../atoms/footer";
import DynamicImport from "../../utils/lazyImport";

const MainContent = DynamicImport(() => import("../organisms/mainContent"));
const ImageList = DynamicImport(() => import("../organisms/imageList"));

const { Meta } = Card;
const { Header, Content, Sider } = Layout;
const { SubMenu } = Menu;

export default function MobileLeftContent(props) {
  return (
    <Layout>
      <Sider theme="light" width="95%" breakpoint="lg" collapsedWidth="0">
        <ImageList />
      </Sider>
      <Layout>
        <MainContent />
        <Footer />
      </Layout>
    </Layout>
  );
}
