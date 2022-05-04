import React, {useContext} from 'react';
import Image from 'next/image';
import  iconClose from '@icons/icon_close.png';
import AppContext from '@context/AppContext';
import styles from '@styles/ShoppingCartItem.module.scss';

const ShoppingCartItem = ({product}) => {

	const { removeFromCart } = useContext(AppContext);

	const handleRemove = product => {
		removeFromCart(product);
	};
	return (
		<div className={styles.ShoppingItem}>
			<figure>
				<Image src={product?.images[0]} alt={product?.title} width={40} height={40} />
			</figure>
			<p>{product?.title}</p>
			<p>${product?.price}</p>
			<Image src={iconClose} onClick={ () => handleRemove(product)} alt="close" />
		</div>
	);
};

export default ShoppingCartItem;
