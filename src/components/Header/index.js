import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';
import styles from './styles.module.css';
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();
  return (
    <header>
      <img src={logo} alt="Logo" onClick={() => navigate('/')} />
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/a-propos">A Propos</Link>
      </nav>
    </header>
  );
}

export default Header;
