import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from "../SearchBar/SearchBar";
import styles from "./NavBar.module.css";


export default function NavBar() {
  return (
    <div className={styles.nav}>
    <div className={styles.TitleAndSearchBar}>
      <Link to="/home">
      </Link>
      <div>
        <h1>DogQuiro </h1>
        <p>The dog's page</p>
      </div>
      <div>
        <SearchBar />
      </div>
    </div>
      <div className={styles.aboutNavButton}>
        <Link to="/about">About</Link>
      </div>
    </div>
  );
}