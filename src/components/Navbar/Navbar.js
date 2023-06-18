import React from 'react' 
import logo from '../../assets/TweetSpark.png' 
import styles from "./Navbar.module.css"; 
 
const Navbar = () => { 
  return ( 
    <header className={styles.container}> 
      <nav className={styles.nav}> 
        <img src={logo} alt="tweetspark" className={styles.logo} /> 
 
        <button 
          type="button" 
          onClick={() => 
            window.open("https://github.com/avleen123/TweetSpark", "_blank") 
          } 
          className="black_btn" 
        > 
          GitHub 
        </button> 
      </nav> 
    </header> 
  ) 
} 
 
export default Navbar