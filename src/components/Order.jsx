import React from 'react';
import Image from 'next/image';
import styles from '@styles/Order.module.scss';
import flec from '@icons/flechita.svg';

const order = () => {
    return (
        <div className={styles['order my-order-item']}>
            <p>
                <span>04.25.21</span>
                <span>6 articles</span>
            </p>
            <p>$560.00</p>
            <Image src={flec} alt=""/>
        </div>
    );
};

export default order;