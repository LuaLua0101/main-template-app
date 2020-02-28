import React, { useEffect } from "react";
import { Layout, Typography, Card, Avatar, Divider } from "antd";
import CommentBox from "../molecules/commentBox";
import detectmob from "../../utils/detectMobile";
import { withRouter } from "react-router-dom";

const { Content } = Layout;
const { Meta } = Card;

function MainContent(props) {
  useEffect(() => {
    console.log(props.location);
  }, []);

  return (
    <Content>
      <div
        style={{
          padding: 14,
          background: "#fff",
          minHeight: 360
        }}
      >
        <Card
          hoverable
          cover={
            <>
              {detectmob() ? (
                <Typography.Title
                  level={4}
                  style={{ margin: "5px 10px 0 10px" }}
                >
                  Tiêu đề bài viết
                </Typography.Title>
              ) : (
                <Typography.Title style={{ margin: "15px 20px 0 20px" }}>
                  Tiêu đề bài viết
                </Typography.Title>
              )}
              <img
                style={detectmob() ? {} : { padding: 30 }}
                src="https://preview.redd.it/xdlzx5nj1noz.jpg?auto=webp&s=bd7aac2fbd7375d4c09d6ea792ba712c31e5f6ea"
                width="100%"
              />
            </>
          }
        >
          <Meta
            avatar={
              <Avatar
                size="large"
                style={{ color: "#f56a00", backgroundColor: "#fde3cf" }}
              >
                U
              </Avatar>
            }
            title="Tên người đăng"
            description="5 phút trước "
          />
          <Divider />
          <CommentBox />
        </Card>
      </div>
    </Content>
  );
}
export default withRouter(MainContent);
