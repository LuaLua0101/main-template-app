import React, { Component } from 'react';
import { FacebookProvider, Group ,Feed, Page,EmbeddedPost} from 'react-facebook';

export default class Example extends Component {
  render () {
    return (
      <FacebookProvider appId="334203584515317">
        <Group
          href="https://www.facebook.com/groups/375934682909754"
          width="300"
          showSocialContext={true}
          showMetaData={true}
          skin="light"
        />
           <Feed link="https://www.facebook.com">
          {({ handleClick }) => (
            <button type="button" onClick={handleClick}>Share on Feed</button>
          )}
        </Feed>
        <Page href="https://www.facebook.com/Lado-Technology-571131936685251" tabs="timeline" />
        <EmbeddedPost href="https://www.facebook.com/groups/laptrinh.IT/?multi_permalinks=3773998669285397&notif_id=1605161707106850&notif_t=group_highlights&ref=notif" width="500" />
      </FacebookProvider>
    );
  }
}