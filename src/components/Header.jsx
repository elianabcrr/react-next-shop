import React, {useState, useContext} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Menu from '@components/DesktopMenu';
import iconMenu from '@icons/icon_menu.svg';
import logoSite from '@logos/logo_yard_sale.svg';
// import logoSite from '@logos/logo_yard_sale.png';
import shoppingCartIcon from '@icons/icon_shopping_cart.svg';
import AppContext from '@context/AppContext';
import ShoppingCart from '@containers/ShoppingCart';

import styles from '@styles/Header.module.scss';

const Header = () => {
	const [toggle, setToggle] = useState(false);
	const [toggleOrders, setToggleOrders] = useState(false);
	const {state} = useContext(AppContext);


	const handleToggle = () =>{
		setToggle(!toggle);
	};

	return (
		<>
			<nav className={styles.nav}>
				<img src={iconMenu} alt="menuuu" className={styles.menu} />
				<div className={styles['navbar-left']}>
					<Link href='/' passHref >
						<Image src={logoSite} alt="logo" className={styles['nav-logo']} />
					</Link>
					
					<ul>
						<li>
							<Link href="/">All</Link>
						</li>
						<li>
							<Link href="/">Clothes</Link>
						</li>
						<li>
							<Link href="/">Electronics</Link>
						</li>
						<li>
							<Link href="/">Furnitures</Link>
						</li>
						<li>
							<Link href="/">Toys</Link>
						</li>
						<li>
							<Link href="/">Others</Link>
						</li>
					</ul>
				</div>
				<div className={styles['navbar-right']}>
					<ul>

						<li className={
							styles['navbar-email']} 
							onClick={handleToggle}
							aria-hidden="true"
						>
							platzi@example.com
						</li>

						<li className={
							styles['navbar-shopping-cart']} 
							onClick={ () => setToggleOrders(!toggleOrders)}
							aria-hidden="true"
						>
							<Image src={shoppingCartIcon} alt="shopping cart" />
							{ state.cart.length > 0 ? <div> { state.cart.length } </div> : null }
						</li>
					</ul>
				</div>
				{toggle && <Menu/>}
				{toggleOrders && <ShoppingCart/>}
				
			</nav>
		</>
	);
};

export default Header;
