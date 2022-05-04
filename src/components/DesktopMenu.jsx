import React from 'react';
import Link from 'next/link';
import styles from '@styles/DesktopMenu.module.scss';

const DesktopMenu = () => {
    return (
        <div className={styles['desktop-menu']}>
            <ul>
                <li>
                    <Link href="/" className={styles.title}>My orders</Link>
                </li>
                <li>
                    <Link href="/" className="">My account</Link>
                </li>
                <li>
                    <Link href="/" className="">Sign out</Link>
                </li>
            </ul>
        </div>
    );
};

export default DesktopMenu;