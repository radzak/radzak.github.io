import React from 'react';
import classNames from 'classnames/bind';

import { AwesomeButtonSocial } from 'react-awesome-button';
import '@/styles/react-awesome-button.css';
import Page from '@/views/components/Page';
import GoogleMap from './components/GoogleMap';

import styles from './styles.css';

const cx = classNames.bind(styles);

const Contact = props => (
  <Page>
    <div className={cx('contact-container')}>
      <div className={cx('info-section')}>
        <div className={cx('heading')}>
          <h2>Let&apos;s talk</h2>
        </div>
        <div className={cx('content')}>
          <p>
            I am available both in <strong>Poznan</strong> and <strong>Krakow</strong>.<br />
            Wanna get in touch or talk about a project?<br />
            Feel free to contact me via email at{' '}
            <span className="fancy">
              <strong>
                <a href="mailto:radek.krzak@gmail.com">radek.krzak@gmail.com</a>
              </strong>
            </span>
          </p>
        </div>
        <div className={cx('social')}>
          <AwesomeButtonSocial type="facebook">Facebook</AwesomeButtonSocial>
          <AwesomeButtonSocial type="twitter">Twitter</AwesomeButtonSocial>
          <AwesomeButtonSocial type="linkedin">LinkedIn</AwesomeButtonSocial>
          <AwesomeButtonSocial type="github">Github</AwesomeButtonSocial>
        </div>
      </div>
      <div className={cx('map-section')}>
        <GoogleMap />
      </div>
    </div>
  </Page>
);

export default Contact;
