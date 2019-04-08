import React from 'react';
import SVG from 'react-inlinesvg';
import styles from '../../../public/styles/Description.css';

const DescriptionMore = () => (
  <div className={styles.default}>
    <div className={styles.iconInfoContainer}>
      <div>
        <SVG src="https://s3-us-west-1.amazonaws.com/open-table-reservation-svg/website-icon.svg" />
      </div>
      <div className={styles.infoContainer}>
        <div>
          <span className={styles.infoHeader}>Website</span>
          <div className={styles.websiteLink}>
            <a href="javascript:void(0)">http://cafebirdiela.com/</a>
          </div>
        </div>
      </div>
    </div>
    <div className={styles.iconInfoContainer}>
      <div>
        <SVG src="https://s3-us-west-1.amazonaws.com/open-table-reservation-svg/phone-number-icon.svg" />
      </div>
      <div className={styles.infoContainer}>
        <div>
          <span className={styles.infoHeader}>Phone Number</span>
          <div>
            <span>(323) 739-6928</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default DescriptionMore;
