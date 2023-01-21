import React, { Component } from 'react';

import styles from "./LeftImage.module.css";



class LeftImage extends Component {

    render() {
                const {src,title,text} =this.props
        return (
            <div>
                 <section className={styles.bigParent}>
                      <div className={styles.leftChild}>
                          <img src={src}  alt="leftImg" />
                      </div>
                      <div className={styles.rightChild}>
                          <h1>{title}</h1>
                          <p>{text}</p>
                      </div>


                 </section>
            </div>
        );
    }
}

export default LeftImage;