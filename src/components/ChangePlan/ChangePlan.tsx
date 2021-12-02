import React, { useState } from 'react';
import cl from 'classnames';

import { PlanItem } from './PlanItem';

import { PlanBilling } from './ChangePlan.props';

import styles from './ChangePlan.module.scss';

export const ChangePlan: React.FC = (): JSX.Element => {
  const [isPlan, setIsPlan] = useState<PlanBilling>('annual');

  const handleChangePlan = (plan: PlanBilling) => {
    setIsPlan(plan);
  };

  return (
    <section className={cl(styles['changeplan-container'])}>
      <h1 className={cl(styles['changeplan-container__title'])}>
        Take better care of yourself every day
      </h1>

      <ul className={cl(styles['changeplan'])}>
        <PlanItem
          billing="monthly"
          title="Monthly"
          price="$ 7.99"
          discountPercent="– 15%"
          discountPrice="$ 5.99"
          subtitle="Billed every month"
          onChangePlan={handleChangePlan}
          isPlan={isPlan}
        />

        <PlanItem
          billing="annual"
          title="Annual"
          price="$ 7.99"
          discountPercent="– 25%"
          discountPrice="$ 4.59"
          subtitle="$79 billed once a year"
          onChangePlan={handleChangePlan}
          isPlan={isPlan}
        />
      </ul>

      <button className={cl(styles['changeplan-container__button'])} type="button">
        continue
      </button>
      <span className={cl(styles['changeplan-container__button-subtitle'])}>
        No commitments. Cancel anytime
      </span>
    </section>
  );
};
