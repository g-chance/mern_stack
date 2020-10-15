import React, { Component } from 'react';
import styles from '../assets/css/HelloWorld.module.css';


class HelloWorld extends Component {
    render() {
        return (
            <div className={styles.thing}>Hello, Worold!
                <p className='thing'>Other Things</p>
                <p>Other Things</p>
            </div>
        )
    }
}
export default HelloWorld;