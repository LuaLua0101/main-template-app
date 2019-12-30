import React from "react";
import { Layout, Menu, Breadcrumb, Icon } from "antd";

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

const Main = props => {
  return (
    <Layout>
      <Sider width={200} style={{ background: "#fff" }}>
        <Menu
          mode="inline"
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          style={{ height: "100%", borderRight: 0 }}
        >
          <SubMenu
            key="sub1"
            title={
              <span>
                <Icon type="user" />
                Teach Me Series
              </span>
            }
          >
            <Menu.Item key="1">Danh sách</Menu.Item>
            <Menu.Item key="2">Thêm mới</Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub2"
            title={
              <span>
                <Icon type="laptop" />
                Iot Hubs
              </span>
            }
          >
            <Menu.Item key="3">Danh sách</Menu.Item>
            <Menu.Item key="4">Thêm mới</Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub3"
            title={
              <span>
                <Icon type="laptop" />
                Press Resources
              </span>
            }
          >
            <Menu.Item key="5">Danh sách</Menu.Item>
            <Menu.Item key="6">Thêm mới</Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub4"
            title={
              <span>
                <Icon type="laptop" />
                Tài Khoản
              </span>
            }
          >
            <Menu.Item
              key="7"
              onClick={() => localStorage.removeItem("@pitech_token")}
            >
              Đăng xuất
            </Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
      <Layout style={{ padding: "0 24px 24px" }}>
        <br />
        <Content
          style={{
            background: "#fff",
            padding: 24,
            margin: 0,
            minHeight: 280
          }}
        >
          {localStorage.hasOwnProperty("@pitech_token")
            ? props.child
            : (window.location.href = "/login")}
        </Content>
      </Layout>
    </Layout>
  );
};

export default Main;
