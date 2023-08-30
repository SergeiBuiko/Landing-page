import styles from './Header.module.css';

export const Header = () => {
  return (
    <div className={styles.navigation}>
      <div>
        <ul className={styles.list}>
          <li>
            <a href="#">About us</a>
          </li>
          <li>
            <a href="#">Brands</a>
          </li>
          <li>
            <a href="#">Commissions</a>
          </li>
          <li>
            <a href="#">News</a>
          </li>
          <li>
            <a href="#">Contact us</a>
          </li>
          <li>
            <a href="#">Careers</a>
          </li>
        </ul>
      </div>
      <div>
        <button>EN</button>
        <button>LOG IN</button>
        <button>SIGN UP</button>
      </div>
    </div>
  );
};
