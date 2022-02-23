import React from "react";
import DogArea from "../DogArea/DogArea";
import NavBar from "../NavBar/NavBar";
import SideBar from "../SideBar/SideBar";
import styles from './Home.module.css'

export default function Home() {
  return (
      <div className={styles.mainContainer}>
        <NavBar />
        <SideBar/>
        <DogArea/>
     </div>
  );
}
