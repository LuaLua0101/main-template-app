import React from "react";
import { FacebookProvider, Comments } from "react-facebook";

export default function CommentBox(props) {
  return (
    <FacebookProvider appId="178514990150431">
      <Comments
        width="100%"
        href="https://www.facebook.com/photo.php?fbid=2111493712325468&set=a.1040741832734000&type=3&theater"
      />
    </FacebookProvider>
  );
}
