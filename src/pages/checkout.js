import Head from 'next/head';
import React from 'react';
import ShoppingCartItem from '@components/ShoppingCartItem';
import styles from '@styles/Checkout.module.scss';

const MyOrder = () => {
  return (
    <>
      <Head>
        <title>Checkout</title>
      </Head>
      <div className={styles['my-order']}>
        <div className={styles['my-order-container']}>
          <h1 className={styles.title}>My order</h1>
          <div className={styles['my-order-content']}>
            <div className={styles.order}>
              <p>
                <span>04.25.21</span>
                <span>6 articles</span>
              </p>
              <p>$560.00</p>
            </div>
            <ShoppingCartItem />
          </div>
        </div>
      </div>
    </>
  );
};

export default MyOrder;
