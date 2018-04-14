import React, { Component, Fragment } from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import Computer from '@/components/Computer';
import styles from './styles.css';

const cx = classNames.bind(styles);

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');

class Project extends Component {
  state = {
    modalIsOpen: false
  };

  openModal = () => {
    this.setState({ modalIsOpen: true });
  };

  afterOpenModal = () => {};

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

  render() {
    const { name, inProgress } = this.props;

    return (
      <Fragment>
        <Computer text={name} fullscreen={!inProgress} onClick={this.openModal} />
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          className={cx('modal-wrapper')}
          overlayClassName={cx('overlay')}
          contentLabel={`${name} Project Overlay`}
        >
          <div className={cx('animated', 'fadeIn', 'modal')}>
            <header className={cx('modal-header')}>
              <div className={cx('modal-title')}>{name}</div>
              <div
                className={cx('close-icon')}
                // role="button"
                // tabIndex={0}
                onClick={this.closeModal}
                // onKeyPress={this.closeModal}
              >
                <i className="fas fa-times" />
              </div>
            </header>

            <div className={cx('modal-content')}>{this.props.children}</div>
          </div>
        </Modal>
      </Fragment>
    );
  }
}

Project.propTypes = {
  children: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  inProgress: PropTypes.bool
};

Project.defaultProps = {
  inProgress: false
};

export default Project;
