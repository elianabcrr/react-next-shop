import React, {useContext} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AppContext from '@context/AppContext';
import ShoppingCartItem from '@components/ShoppingCartItem';
import  iconFlech from '@icons/flechita.svg';
import styles from '@styles/ShoppingCart.module.scss';

const ShoppingCart = () => {
    const { state } = useContext(AppContext);

    const sumTotal = () => {
		const reducer = (accumalator, currentValue) => accumalator + currentValue.price;
		const sum = state.cart.reduce(reducer, 0);
		return sum;
	};

    return (
        <aside className={styles['product-detail']}>
            <div className={styles['shopping-cart']}>
                <div className={styles['shopping-cart-container']}>
                    <Image src={iconFlech} alt="row"/>
                    <h1 className={styles.title}>Shopping Cart</h1>
                </div>
                <div className={styles['shopping-cart-content']}>
                    { state.cart.map( product => (

                        <ShoppingCartItem product={product} key={`shopping-cart-item-${product.id}`}/>
                    ))}
                    
                    <div className={styles.order}>
                        <p>
                            <span >Total</span>
                        </p>
                        <p>${sumTotal()}</p>
                    </div>
                    <Link className={styles['primary-button', 'add-to-cart-button']} href='/checkout'>Checkout</Link>
                </div>
            </div>
        </aside>

    );
};

export default ShoppingCart;