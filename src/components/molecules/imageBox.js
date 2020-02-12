import React from "react";
import { Layout, Avatar } from "antd";
import { Card } from "antd";

const { Meta } = Card;
const { Content } = Layout;

export default function ImageBox(props) {
  return (
    <Content>
      <div style={{ padding: 14, background: "#fff" }}>
        <Card
          hoverable
          cover={
            <img
              style={{ height: "250px", objectFit: "cover", padding: 5 }}
              src="https://preview.redd.it/xdlzx5nj1noz.jpg?auto=webp&s=bd7aac2fbd7375d4c09d6ea792ba712c31e5f6ea"
              width="100%"
            />
          }
        >
          <Meta
            style={{ height: 40 }}
            // avatar={
            //   <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            // }
            title={props.data.title}
            description={props.data.time}
          />
        </Card>
      </div>
    </Content>
  );
}
