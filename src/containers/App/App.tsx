import clsx from 'clsx';
import { Component, ComponentChild } from 'preact';

// styles
import styles from './styles.module.scss';

export default class App extends Component {
  public render(): ComponentChild {
    return (
      <div className={clsx(styles.wrapper)}>
        {/*overlay*/}
        <div className={clsx(styles.overlay)}></div>

        {/*modal*/}
        <div className={clsx(styles.modalContainer)}>
          <div className={clsx(styles.modalContent)}></div>
        </div>
      </div>
    );
  }
}
