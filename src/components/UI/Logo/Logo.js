import React from 'react';
import { translate } from 'react-i18next';
import afretLogo from '../../../assets/images/afret_logo.svg';
import classes from './Logo.scss';

const logo = (props) => {
  const logoClasses = [classes.Logo];
  logoClasses.push(props.smallLogo ? classes.SmallLogo : classes.BigLogo);
  return(
    <div className={logoClasses.join(' ')}>
      <img
        className={classes.LogoImage}
        src={afretLogo}
        alt={`${props.t('title')} logo`}
        aria-labelledby='logo-text' />
      <div id='logo-text' className={classes.LogoText}>
        <h1>{props.t('title')}</h1>
        <h2>{props.t('subtitle')}</h2>
      </div>
    </div>
  );
};

export default translate('ui')(logo);
