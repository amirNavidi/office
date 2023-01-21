import styles from "./slide.module.css"
import React, { Component } from 'react';
import logo from "../images/logo-consult.png"

class Slide extends Component {
    render() {
        return (
            <>
                <section className={styles.slileParent}>

                      <div className={styles.logo}> 
                           <img alt="logo" src={logo} />
                       </div>
                       <div className={styles.titleParent}>
                               <div className={styles.sectionOne}>
                               <h3>Welcom</h3>
                               <p>At Enfold Consuting</p>
                               </div>


                               <div className={styles.section}>
                               <h3>Service</h3>
                               <p> What can i offer</p>
                               </div>

                               <div className={styles.section}>
                               <h3>About</h3>
                               <p>Me and my work</p>
                               </div>

                               <div className={styles.section}>
                               <h3>Contact</h3>
                               <p>Get in tououch</p>
                               </div>

                       </div>

                    
                </section>
            </>
        );
    }
}

export default Slide;