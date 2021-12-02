import React from 'react';
import cl from 'classnames';

import { ReactComponent as AppleSVG } from 'src/assets/icons/app-store.svg';
import { ReactComponent as GooglePlaySVG } from 'src/assets/icons/google-play.svg';
import twitter from 'src/assets/images/twitter.png';
import facebook from 'src/assets/images/facebook.png';
import instagram from 'src/assets/images/instargram.png';
import linkedin from 'src/assets/images/linkedin.png';

import styles from './Footer.module.scss';

export const Footer: React.FC = (): JSX.Element => (
  <footer className={cl(styles['footer'])}>
    <nav className={cl(styles['footer__mobile'])}>
      <p className={cl(styles['footer__mobile-title'])}>Get the mobile app</p>
      <ul className={cl(styles['footer__mobile-list'])}>
        <li className={cl(styles['footer__mobile-item'])}>
          <a
            className={cl(styles['footer__mobile-link'])}
            href="‎https://itunes.apple.com/app/welltory-personal-nyj-analitik/id1074367771?mt=8"
          >
            <AppleSVG className={cl(styles['footer__mobile-icon'])} />
          </a>
        </li>
        <li className={cl(styles['footer__mobile-item'])}>
          <a
            className={cl(styles['footer__mobile-link'])}
            href="https://play.google.com/store/apps/details?id=com.welltory.client.android"
          >
            <GooglePlaySVG className={cl(styles['footer__icon-google'])} />
          </a>
        </li>
      </ul>
    </nav>

    <nav className={cl(styles['footer__welltory'])}>
      <ul className={cl(styles['footer__welltory-list'])}>
        <li className={cl(styles['footer__welltory-item'])}>
          <a className={cl(styles['footer__welltory-link'])} href="https://welltory.com/terms/">
            Terms of use
          </a>
        </li>
        <li className={cl(styles['footer__welltory-item'])}>|</li>
        <li className={cl(styles['footer__welltory-item'])}>
          <a className={cl(styles['footer__welltory-link'])} href="https://welltory.com/privacy/">
            Privacy policy
          </a>
        </li>
      </ul>
    </nav>

    <nav className={cl(styles['footer__social'])}>
      <ul className={cl(styles['footer__social-list'])}>
        <li className={cl(styles['footer__social-item'])}>
          <a className={cl(styles['footer__social-link'])} href="https://twitter.com/welltory">
            <img className={cl(styles['footer__social-image'])} src={twitter} alt="Twitter" />
          </a>
        </li>
        <li className={cl(styles['footer__social-item'])}>
          <a className={cl(styles['footer__social-link'])} href="https://www.facebook.com/welltory">
            <img className={cl(styles['footer__social-image'])} src={facebook} alt="Facebook" />
          </a>
        </li>
        <li className={cl(styles['footer__social-item'])}>
          <a
            className={cl(styles['footer__social-link'])}
            href="https://www.instagram.com/welltory/"
          >
            <img className={cl(styles['footer__social-image'])} src={instagram} alt="Instagram" />
          </a>
        </li>
        <li className={cl(styles['footer__social-item'])}>
          <a
            className={cl(styles['footer__social-link'])}
            href="https://www.linkedin.com/company/welltory"
          >
            <img className={cl(styles['footer__social-image'])} src={linkedin} alt="LinkedIn" />
          </a>
        </li>
      </ul>
    </nav>
  </footer>
);
