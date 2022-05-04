import React from 'react';
import Image from 'next/image';
import styles from '@styles/OrderItem.module.scss';

const OrderItem = () => {
    return (
        <div className={styles['order-cart']}>
            <figure>
                <Image src="https://images.pexels.com/photos/5101410/pexels-photo-5101410.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="cake"/>
            </figure>
            <p>Cake</p>
            <p>$30.000</p>
        </div>
    );
};

export default OrderItem;