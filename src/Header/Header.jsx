import styles from './Header.module.scss'
import logoImage from './resource/logo.png'
import searchImage from './resource/search.png'
import cartImage from './resource/cart.png'
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Container from "@mui/material/Container";

export const Header = () => {
  return (
    <div className={styles.root}>
      <Container maxwidth = "lg">
        <div className={styles.inner}>
          <div className={styles.container}>
            <img src={logoImage} alt="Logo" className={styles.logoImage} />
            <div className={styles.name}>GREENSHOP</div>
          </div>
          <div className={styles.buttons}>
            <img src={searchImage} alt="Search" className={styles.searchImage} />
            <img src={cartImage} alt="Cart" className={styles.cartImage}/>
            <Link to="/login">
              <Button variant="outlined">Войти</Button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}