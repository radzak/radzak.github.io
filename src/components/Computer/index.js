import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './styles.css';

const Computer = ({ fullscreen, text, onClick }) => {
  const midClasses = classNames({
    mid: true,
    fullscreen
  });

  const siteClasses = classNames({
    site: true,
    centered: fullscreen
  });

  return (
    <div className="fixed-ratio" onClick={onClick}>
      <div className="wrap">
        <div className="comp">
          <div className="monitor">
            <div className={midClasses}>
              <div className={siteClasses}>
                <div className="topbar">
                  <div className="cerrar">
                    <div className="circl" />
                    <div className="circl" />
                    <div className="circl" />
                  </div>
                </div>
                <div className="inhead">
                  <div className="mid">
                    <div className="item" />
                  </div>
                  <div className="mid txr">
                    <div className="item" />
                    <div className="item" />
                    <div className="item" />
                    <div className="item" />
                  </div>
                </div>
                <div className="inslid">
                  <h5>{text}</h5>
                </div>
                <div className="incont">
                  <div className="item" />
                  <div className="item" />
                  <div className="item" />
                  <div className="item" />
                  <div className="wid">
                    <div className="itwid">
                      <div>
                        <div className="contfoot" />
                      </div>
                    </div>
                    <div className="itwid">
                      <div>
                        <div className="contfoot" />
                      </div>
                    </div>
                    <div className="itwid">
                      <div>
                        <div className="contfoot" />
                      </div>
                    </div>
                    <div className="clearfix" />
                  </div>
                  <div className="infoot" />
                </div>
              </div>
            </div>
            {!fullscreen && (
              <div className="mid codigo">
                <div className="line">
                  <div className="item var" />
                  <div className="item cont" />
                  <div className="clearfix" />
                </div>
                <div className="line">
                  <div className="item min var" />
                  <div className="item min fun" />
                  <div className="clearfix" />
                </div>
                <div className="line">
                  <div className="item min var" />
                  <div className="clearfix" />
                </div>
                <div className="line">
                  <div className="item var" />
                  <div className="item atr" />
                  <div className="item cont" />
                  <div className="clearfix" />
                </div>
                <div className="line tab1">
                  <div className="item min atr" />
                  <div className="item lrg fun" />
                  <div className="item min fun" />
                  <div className="item lrg cont" />
                  <div className="clearfix" />
                </div>
                <div className="line tab1">
                  <div className="item lrg atr" />
                  <div className="item min fun" />
                  <div className="item min cont" />
                  <div className="clearfix" />
                </div>
                <div className="line tab1">
                  <div className="item atr" />
                  <div className="item min fun" />
                  <div className="item atr" />
                  <div className="clearfix" />
                </div>
                <div className="line tab1">
                  <div className="item min atr" />
                  <div className="item min cont" />
                  <div className="item lrg atr" />
                  <div className="item  fun" />
                  <div className="clearfix" />
                </div>
                <div className="line tab1">
                  <div className="item min atr" />
                  <div className="item lrg fun" />
                  <div className="item lrg cont" />
                  <div className="item min fun" />
                  <div className="clearfix" />
                </div>
                <div className="line tab1">
                  <div className="item min var" />
                  <div className="clearfix" />
                </div>
                <div className="line tab1">
                  <div className="item min var" />
                  <div className="clearfix" />
                </div>
                <div className="line tab2">
                  <div className="item min var" />
                  <div className="clearfix" />
                </div>
                <div className="line tab2">
                  <div className="item min atr" />
                  <div className="item min fun" />
                  <div className="clearfix" />
                </div>
                <div className="line tab3">
                  <div className="item min atr" />
                  <div className="item min fun" />
                  <div className="item lrg fun" />
                  <div className="item lrg cont" />
                  <div className="clearfix" />
                </div>
                <div className="line tab3">
                  <div className="item min atr" />
                  <div className="item min fun" />
                  <div className="item lrg atr" />
                  <div className="item lrg cont" />
                  <div className="clearfix" />
                </div>
                <div className="line tab4">
                  <div className="item min fun" />
                  <div className="item lrg atr" />
                  <div className="clearfix" />
                </div>
                <div className="line tab1">
                  <div className="item atr" />
                  <div className="item var" />
                  <div className="item cont" />
                  <div className="clearfix" />
                </div>
                <div className="line tab3">
                  <div className="item min var" />
                  <div className="clearfix" />
                </div>
                <div className="line tab4">
                  <div className="item min atr" />
                  <div className="item min fun" />
                  <div className="item lrg atr" />
                  <div className="item lrg cont" />
                  <div className="clearfix" />
                </div>
                <div className="line">
                  <div className="item min var" />
                  <div className="clearfix" />
                </div>
              </div>
            )}
          </div>
          <div className="base">
            <div className="handle" />
          </div>
        </div>
      </div>
    </div>
  );
};

Computer.propTypes = {
  fullscreen: PropTypes.bool,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func
};

Computer.defaultProps = {
  fullscreen: false,
  onClick: () => {}
};

export default Computer;
