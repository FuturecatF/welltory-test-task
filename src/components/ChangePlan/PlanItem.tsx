import React, { useState, useEffect } from 'react';
import cl from 'classnames';

import { ReactComponent as TriangleSVG } from 'src/assets/icons/rectangle-changeplan.svg';

import { IPlanItem } from './ChangePlan.props';

import styles from './ChangePlan.module.scss';

export const PlanItem: React.FC<IPlanItem> = ({
  billing,
  title,
  price,
  discountPercent,
  discountPrice,
  subtitle,
  onChangePlan,
  isPlan
}): JSX.Element => {
  const [isActive, setIsActive] = useState<boolean>(false);

  const handleChangePlan = () => {
    onChangePlan(billing);
  };

  useEffect(() => {
    if (isPlan === billing) {
      setIsActive(true);
    } else setIsActive(false);
  }, [isPlan, billing]);

  const handleKeyPress = () => {};
  return (
    <li
      className={cl(styles['plan-item'], {
        [styles['plan-item_active']]: isActive
      })}
      role="presentation"
      onClick={handleChangePlan}
      onKeyPress={handleKeyPress}
    >
      <ul className={cl(styles['plan-item__list'])}>
        <li className={cl(styles['plan-item__item'])}>{title}</li>
        <li
          className={cl(styles['plan-item__item'], styles['plan-item__item_price'], {
            [styles['plan-item__item_active']]: isActive
          })}
        >
          {discountPrice}
        </li>
      </ul>
      <div className={cl(styles['plan-item__subtitle-container'])}>
        <span
          className={cl(styles['plan-item__subtitle-mobile'], {
            [styles['plan-item__subtitle-mobile_active']]: isActive
          })}
        >
          {subtitle}
        </span>
        <span className={cl(styles['plan-item__discount-price'])}>{price}</span>
      </div>

      <span
        className={cl(styles['plan-item__subtitle'], {
          [styles['plan-item__subtitle_active']]: isActive
        })}
      >
        {subtitle}
      </span>
      <span
        className={cl(styles['plan-item__discount-percent'], {
          [styles['plan-item__discount-percent_active']]: isActive
        })}
      >
        {discountPercent}
        <TriangleSVG
          className={cl(styles['plan-item__triangle-icon'], {
            [styles['plan-item__triangle-icon_active']]: isActive
          })}
        />
      </span>
    </li>
  );
};
