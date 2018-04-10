import React, { Fragment } from 'react';
import { AwesomeButtonSocial } from 'react-awesome-button';

import './styles.css';

const SocialButtons = () => (
  <Fragment>
    <AwesomeButtonSocial
      type="messenger"
      href="https://www.messenger.com/t/radek.krzak"
      target="_blank"
    >
        Messenger
    </AwesomeButtonSocial>
    <AwesomeButtonSocial type="twitter" href="https://twitter.com/RadekKrzak" target="_blank">
        Twitter
    </AwesomeButtonSocial>
    <AwesomeButtonSocial
      type="linkedin"
      href="https://www.linkedin.com/in/radek-krzak-13127511b/"
      target="_blank"
    >
        LinkedIn
    </AwesomeButtonSocial>
    <AwesomeButtonSocial type="github" href="https://github.com/radzak" target="_blank">
        Github
    </AwesomeButtonSocial>
  </Fragment>
);

export default SocialButtons;
