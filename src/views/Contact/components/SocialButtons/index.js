import React, { Fragment } from 'react';
import { AwesomeButtonSocial } from 'react-awesome-button';

const SocialButtons = () => (
  <Fragment>
    <AwesomeButtonSocial
      type="messenger"
      href="https://www.messenger.com/t/radek.krzak"
      target="_blank"
    />
    <AwesomeButtonSocial type="twitter" href="https://twitter.com/RadekKrzak" target="_blank" />
    <AwesomeButtonSocial
      type="linkedin"
      href="https://www.linkedin.com/in/radek-krzak-13127511b/"
      target="_blank"
    />
    <AwesomeButtonSocial type="github" href="https://github.com/radzak" target="_blank" />
  </Fragment>
);

export default SocialButtons;
