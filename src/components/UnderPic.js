import React, { Component } from 'react';
import styles from "./UnderPic.module.css"
import { FaSearch } from 'react-icons/fa';
import { FaAlignLeft } from 'react-icons/fa';
import { FaChartBar } from 'react-icons/fa';

class UnderPic extends Component {
    render() {
        return (
            <div>
                <section className={styles.parent} >
                    <p>CONSULTING FOR SMALL AND MEDIUM SIZED BUSINESS –
                      PROFESSIONAL, FAST, AFFORDABLE</p>
                   <section className={styles.iconFather}>
                        <div className={styles.section}>
                                <div className={styles.iconParent}>
                                <FaSearch   className={styles.icon}/>
                                </div>
                                <h1>RESEARCH</h1>
                                <p>Aenean commodo ligula eget dolor. Aenean massa. </p>
                        </div>
                        <div className={styles.section}>
                                <div className={styles.iconParent}>
                                <FaAlignLeft   className={styles.icon}/>
                                </div>
                                <h1>RESEARCH</h1>
                                <p>Aenean commodo ligula eget dolor. Aenean massa. </p>
                        </div>




                        <div className={styles.section}>
                                <div className={styles.iconParent}>
                                <FaChartBar   className={styles.icon}/>
                                </div>
                                <h1>RESEARCH</h1>
                                <p>Aenean commodo ligula eget dolor. Aenean massa. </p>
                        </div>


                   </section>

                </section>
            </div>
        );
    }
}

export default UnderPic;