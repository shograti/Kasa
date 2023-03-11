import styles from './styles.module.css';
import logo from '../../assets/logo-white.png';

function Footer() {
  const today = new Date().getFullYear();
  return (
    <footer>
      <div className={styles.container}>
        <img src={logo} alt="" />
        <p>©{today} Kasa. All rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
