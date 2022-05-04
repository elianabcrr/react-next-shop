import React from 'react';
import Image from 'next/image';
import styles from '@styles/ProductDetails.module.scss';
// import addCart from '@icons/bt_add_to_cart.svg';
import close from '@icons/icon_close.png';
import ProductInfo from '@components/ProductInfo';

const ProductDetails = () => {
    return (
        <aside className={styles['product-detail']}>
            <div className={styles['product-detail-close']}>
                <Image src={close} alt="close"/>
            </div>
            <ProductInfo/>
           
        </aside>
    );
};

export default ProductDetails;