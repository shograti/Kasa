import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';
import styles from './styles.module.css';

function Header() {
  return (
    <header>
      <img src={logo} alt="Logo" />
      <nav>
        <Link>Accueil</Link>
        <Link>A Propos</Link>
      </nav>
    </header>
  );
}

export default Header;
