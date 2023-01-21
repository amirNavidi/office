import React from 'react';
import styles from "./Background.module.css"
import client1 from "../images/themeforest.png"
import client2 from "../images/kriesi.png"
import client3 from "../images/gravity.png"
import client4 from "../images/envato.png"
import client5 from "../images/enfold.png"
import client6 from "../images/bbpress.png"

const Background = () => {
    return (
        <section className={styles.container}>
            <div className={styles.innerContainer} >

                <div className={styles.parentTop}> 
                    <h1 className={styles.topH}>A LITTLE BIT ABOUT ME
                    AND MY PREVIOUS WORK</h1>
                </div>

                <div className={styles.education}>
                    <div className={styles.leftChild}>
                        <h1>Education</h1>
                        <ul>
                            <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
                            <li>Aenean commodo ligula eget dolor. Aenean massa.</li>
                            <li>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</li>
                            <li>Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</li>
                            
                        </ul>
                        
                    </div>
                    <div className={styles.rightChild}>
                        <h1>Previous Employers</h1>
                        <ul>
                            <li>Cum sociaus</li>
                            <li>Dj.fm</li>
                            <li>Lorelit</li>
                            <li>Domstats</li>
                            <li>Lorem ipsulit</li>
                            <li>Aeassa</li>
                        </ul>
                    </div>
                </div>
                <div className={styles.client}>
                    <h1>Clients</h1>
                     <div className={styles.imageCard}>
                         <img alt="client" src={client1} />
                         <img alt="client" src={client2} />
                         <img alt="client" src={client3} />
                         <img alt="client" src={client4} />
                         <img alt="client" src={client5} />
                         <img alt="client" src={client6} />
                     </div>
                </div>







            </div>

           
        </section>
    );
};

export default Background;