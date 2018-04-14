import React from 'react';
import classNames from 'classnames/bind';
import { AwesomeButtonSocial } from 'react-awesome-button';

import Project from '../Project';
import styles from '../styles/project-details.css';

const cx = classNames.bind(styles);

const TeamUp = () => (
  <Project inProgress name="Team Up">
    <div className={cx('text')}>
      <section>
        <h2>About</h2>
        <hr />
        <p>
          Multilingual platform for people looking for a gaming partner. Main functionality includes
          real-time matchmaking, chat-rooms and integration with the most popular games. The project
          is in early stages of development.
        </p>
      </section>
      <section>
        <h2>Tech stack</h2>
        <hr />
        <ul>
          <li>Python</li>
          <li>Django + Django Rest Framework</li>
          <li>Docker</li>
          <li>Nginx</li>
          <li>React & Redux</li>
        </ul>
      </section>
    </div>

    <AwesomeButtonSocial type="github" href="https://github.com/crew-up/team-up" target="_blank">
      Visit the repo
    </AwesomeButtonSocial>
  </Project>
);

export default TeamUp;
