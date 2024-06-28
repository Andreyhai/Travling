import React from 'react';
import styles from './Hero.module.css';

import playMarket from '../../../source/playMarket.png'

const Download = (props) => {
    return (
        <button className={styles.download}>
            <div className={styles.download_logo}>
                <img src={props.logo} alt={props.logo}/>
            </div>
            <div className={styles.download_content}>
                <div>{props.title}</div>
                <div>{props.content}</div>
            </div>
        </button>
    )
}

const Hero = () => {
    return (
        <section className={styles.content}>
            <section className={styles.content__leftSection}>
                <div className={styles.content__leftSection_title}>Start your journey
                    by one click, explore beautiful world!
                </div>
                <div>Plan and book your perfect trip with expert advice, travel tips, destination information and
                    inspiration from us!
                </div>
                <div>
                    <Download logo={playMarket} title={"GET IN ON"} content={"Google Play"}/>
                    <Download logo={playMarket} title={"Download on the"} content={"App Store"} />
                </div>
            </section>
            <section className={styles.content__rightSection}></section>
        </section>
    );
};

export default Hero;