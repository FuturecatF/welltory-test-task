import React from 'react';
import cl from 'classnames';

import welltory from 'src/assets/images/welltory-pro.png';

import { ChangePlan, PlanComparison } from 'src/components';

import styles from './SelectPlan.module.scss';

export const SelectPlan: React.FC = (): JSX.Element => (
  <main className={cl(styles['select-plan'])}>
    <img src={welltory} alt="Welltory Pro" className={cl(styles['select-plan__welltory-image'])} />
    <ChangePlan />
    <PlanComparison />
  </main>
);
