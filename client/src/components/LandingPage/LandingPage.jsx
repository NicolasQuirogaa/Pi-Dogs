import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../LandingPage/LandingPage.module.css'
import BannerImage from '../../assets/homeee.jpg';

export default function LandingPage(){
    return(
            <div className={styles.hero}>
                <div className={styles.home} style={{ backgroundImage:`url(${BannerImage})`}}></div>
                <h1 className={styles.title} >Welcome to DogQuiro</h1>
                <Link to='/home'>
                    <button className={styles.bubblyButton}>Let's go </button>
                </Link>
            </div>
    )
}