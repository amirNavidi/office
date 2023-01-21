import React, { Component } from 'react';
import styles from "./first.module.css"

class First extends Component {
    render() {
        return (
            <>
            <div  className={styles.parent}>
                 <div className={styles.container}>
                 <h1>MY NAME IS AMIR HOSSEIN NAVIDI</h1>
                  <p>Accredited consulution in New York ,New jersey and Alaska</p>
                 </div>
            </div>
            </>
        );
    }
}

export default First;