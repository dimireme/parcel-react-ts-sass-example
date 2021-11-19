import styles from './App.module.scss';

import Header from './Header';

const App = () => {
  return (
    <div className={styles.layout}>
      <div className={styles.header}>
        <Header />
      </div>
      <div className={styles.content}>Some Content</div>
      <div className={styles.footer}>Footer</div>
    </div>
  );
};

export default App;
