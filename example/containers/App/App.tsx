import { type FC } from 'react';

// components
import Button from '@example/components/Button';

// styles
import styles from './styles.module.scss';

const App: FC = () => {
  const handleOnConnectClick = () => {
    console.log('clicked');
  };

  return (
    <div className={styles.wrapper}>
      <Button onClick={handleOnConnectClick}>Connect</Button>
    </div>
  );
};

export default App;
