import React from 'react';
import cl from 'classnames';

import { ReactComponent as DashSVG } from 'src/assets/icons/dash.svg';
import { ReactComponent as SuccessSVG } from 'src/assets/icons/success.svg';

import styles from './PlanComparison.module.scss';

export const PlanComparison: React.FC = (): JSX.Element => (
  <section className={cl(styles['comparison'])}>
    <h2 className={cl(styles['comparison__title'])}>Choose the best plan for you</h2>
    <ul className={cl(styles['comparison__list-title'])}>
      <li className={cl(styles['comparison__item-title'])}>What you get</li>
      <li className={cl(styles['comparison__item-title'], styles['comparison__item-title_mobile'])}>
        What you get
      </li>
      <li
        className={cl(
          styles['comparison__item-title'],
          styles['comparison__item-title_text-align']
        )}
      >
        for free
      </li>
      <li
        className={cl(
          styles['comparison__item-title'],
          styles['comparison__item-title_text-align'],
          styles['comparison__item-title_mobile']
        )}
      >
        Free
      </li>
      <li
        className={cl(
          styles['comparison__item-title'],
          styles['comparison__item-title_text-align'],
          styles['comparison__item-title_gradient']
        )}
      >
        in Pro
        <span className={cl(styles['comparison__gradient-border'])} />
      </li>
      <li
        className={cl(
          styles['comparison__item-title'],
          styles['comparison__item-title_text-align'],
          styles['comparison__item-title_gradient'],
          styles['comparison__item-title_mobile']
        )}
      >
        Pro
        <span className={cl(styles['comparison__gradient-border'])} />
      </li>
    </ul>

    <div className={cl(styles['comparison__container'])}>
      <h3 className={cl(styles['comparison__container-title'])}>Feel better fast</h3>
      <ul className={cl(styles['comparison__list'])}>
        <li className={cl(styles['comparison__list-item'])}>
          <p className={cl(styles['comparison__title-item'])}>
            Personalized research papers: see how your lifestyle affects your health and what you
            can do about it
          </p>

          <span className={cl(styles['comparison__icon-container'])}>
            <DashSVG className={cl(styles['comparison__dash-icon'])} />
          </span>
          <span className={cl(styles['comparison__icon-container'])}>
            <SuccessSVG className={cl(styles['comparison__success-icon'])} />
          </span>
        </li>

        <li className={cl(styles['comparison__list-item'])}>
          <p className={cl(styles['comparison__title-item'])}>
            Recommendations: get science-backed tips to beat insomnia, cure a hangover, support a
            panic attack, clear a headache, or get blood pressure under control
          </p>
          <span className={cl(styles['comparison__icon-container'])}>
            <DashSVG className={cl(styles['comparison__dash-icon'])} />
          </span>
          <span className={cl(styles['comparison__icon-container'])}>
            <SuccessSVG className={cl(styles['comparison__success-icon'])} />
          </span>
        </li>

        <li className={cl(styles['comparison__list-item'])}>
          <p className={cl(styles['comparison__title-item'])}>
            Personalized move goals: your heartbeat and daily steps data will steer you toward
            better health — effortlessly
          </p>
          <span className={cl(styles['comparison__icon-container'])}>
            <DashSVG className={cl(styles['comparison__dash-icon'])} />
          </span>
          <span className={cl(styles['comparison__icon-container'])}>
            <SuccessSVG className={cl(styles['comparison__success-icon'])} />
          </span>
        </li>

        <li className={cl(styles['comparison__list-item'])}>
          <p className={cl(styles['comparison__title-item'])}>
            Breathing practices: focus or unwind with scientifically-proven guided practices
          </p>
          <span className={cl(styles['comparison__icon-container'])}>
            <SuccessSVG className={cl(styles['comparison__success-icon'])} />
          </span>
          <span className={cl(styles['comparison__icon-container'])}>
            <SuccessSVG className={cl(styles['comparison__success-icon'])} />
          </span>
        </li>

        <li className={cl(styles['comparison__list-item'])}>
          <p className={cl(styles['comparison__title-item'])}>
            Yesterday's move report: see if you’re doing enough to support your health
          </p>
          <span className={cl(styles['comparison__icon-container'])}>
            <SuccessSVG className={cl(styles['comparison__success-icon'])} />
          </span>
          <span className={cl(styles['comparison__icon-container'])}>
            <SuccessSVG className={cl(styles['comparison__success-icon'])} />
          </span>
        </li>
      </ul>
    </div>

    <div className={cl(styles['comparison__container'])}>
      <h3 className={cl(styles['comparison__container-title'])}>Gain rich health insights</h3>
      <ul className={cl(styles['comparison__list'])}>
        <li className={cl(styles['comparison__list-item'])}>
          <p className={cl(styles['comparison__title-item'])}>
            Detailed heartbeat analytics: access stress, energy, and focus scores, metrics and
            charts — check in on how your body is doing and spot any changes
          </p>
          <span className={cl(styles['comparison__icon-container'])}>
            <DashSVG className={cl(styles['comparison__dash-icon'])} />
          </span>
          <span className={cl(styles['comparison__icon-container'])}>
            <SuccessSVG className={cl(styles['comparison__success-icon'])} />
          </span>
        </li>

        <li className={cl(styles['comparison__list-item'])}>
          <p className={cl(styles['comparison__title-item'])}>
            In-depth blood pressure analysis: enter your numbers, and we’ll provide five extra
            indexes, give detailed interpretations, and alert you if something doesn’t look right
          </p>
          <span className={cl(styles['comparison__icon-container'])}>
            <DashSVG className={cl(styles['comparison__dash-icon'])} />
          </span>
          <span className={cl(styles['comparison__icon-container'])}>
            <SuccessSVG className={cl(styles['comparison__success-icon'])} />
          </span>
        </li>

        <li className={cl(styles['comparison__list-item'])}>
          <p className={cl(styles['comparison__title-item'])}>
            Blood pressure reports: send your data to your doctor or print out neat reports with all
            of your readings
          </p>
          <span className={cl(styles['comparison__icon-container'])}>
            <DashSVG className={cl(styles['comparison__dash-icon'])} />
          </span>
          <span className={cl(styles['comparison__icon-container'])}>
            <SuccessSVG className={cl(styles['comparison__success-icon'])} />
          </span>
        </li>

        <li className={cl(styles['comparison__list-item'])}>
          <p className={cl(styles['comparison__title-item'])}>
            Basic heartbeat analytics: just your stress, energy, and focus scores — no extra metrics
          </p>
          <span className={cl(styles['comparison__icon-container'])}>
            <SuccessSVG className={cl(styles['comparison__success-icon'])} />
          </span>
          <span className={cl(styles['comparison__icon-container'])}>
            <SuccessSVG className={cl(styles['comparison__success-icon'])} />
          </span>
        </li>

        <li className={cl(styles['comparison__list-item'])}>
          <p className={cl(styles['comparison__title-item'])}>
            Basic blood pressure analysis: we’ll interpret your top and bottom numbers — without
            extra indexes
          </p>
          <span className={cl(styles['comparison__icon-container'])}>
            <SuccessSVG className={cl(styles['comparison__success-icon'])} />
          </span>
          <span className={cl(styles['comparison__icon-container'])}>
            <SuccessSVG className={cl(styles['comparison__success-icon'])} />
          </span>
        </li>

        <li className={cl(styles['comparison__list-item'])}>
          <p className={cl(styles['comparison__title-item'])}>
            Yesterday’s heart report sent to your feed daily: note the relationship between your
            activities and any changes to your heart rate
          </p>
          <span className={cl(styles['comparison__icon-container'])}>
            <SuccessSVG className={cl(styles['comparison__success-icon'])} />
          </span>
          <span className={cl(styles['comparison__icon-container'])}>
            <SuccessSVG className={cl(styles['comparison__success-icon'])} />
          </span>
        </li>
      </ul>
    </div>
    <div className={cl(styles['comparison__buttons-container'])}>
      <button
        className={cl(styles['comparison__button'], styles['comparison__button-free'])}
        type="button"
      >
        go with the free version
      </button>

      <button
        className={cl(styles['comparison__button'], styles['comparison__button-upgrade'])}
        type="button"
      >
        upgrade now
      </button>
    </div>
  </section>
);
