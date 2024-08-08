import styles from './Header.module.scss'
import logoImage from './resource/Logo.png'
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
          </div>
          <div className={styles.buttons}>
            <img src={searchImage} alt="Search" className={styles.searchImage} />
            <img src={cartImage} alt="Cart" className={styles.cartImage}/>
            <Button variant="outlined" className={styles.loginButton}>Login</Button>
          </div>
        </div>
      </Container>
    </div>
  );
}