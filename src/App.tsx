/* eslint-disable @typescript-eslint/no-unused-vars */
import { Header } from './components';
import styles from './App.module.css';
import { TodoProvider } from './utils';

export const App = () => {
  return (
    <TodoProvider>
      <div className={styles.App}>
        <Header />
      </div>
    </TodoProvider>
  );
};
