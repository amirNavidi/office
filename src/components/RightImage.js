import React, { Component  } from 'react';
import styles from "./RightImage.module.css"

class RightImage extends Component {
    render() {
        const {src,title,text} =this.props
        return (
            <div>
                  <section className={styles.bigParent}>
                      <div className={styles.leftChild}>
                          <h1>{title}</h1>
                          <p>{text}</p>
                      </div>
                      <div className={styles.rightChild}>
                          <img src={src}  alt="leftImg" />
                      </div>


                 </section>
            </div>
        );
    }
}

export default RightImage;