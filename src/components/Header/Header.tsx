import React from 'react';
import cl from 'classnames';

import { ReactComponent as HeartSVG } from 'src/assets/icons/heart-logo.svg';
import { ReactComponent as TextSVG } from 'src/assets/icons/text-logo.svg';

import styles from './Header.module.scss';

export const Header: React.FC = (): JSX.Element => (
  <header className={cl(styles['header'])}>
    <HeartSVG className={cl(styles['header__heart-icon'])} />
    <TextSVG className={cl(styles['header__text-icon'])} />
  </header>
);
