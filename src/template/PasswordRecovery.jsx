import React from 'react';
import Image from 'next/image';
import styles from '@styles/PasswordRecovery.scss';
const PasswordRecovery = () => {
    return (
        <div className={styles['create-account']}>
            <div className={styles['form-container']}>
                <Image src="assets/logos/logo_yard_sale.svg" alt="logo" className={styles.logo} />
                <h1 className={styles.title}>Create a new Password</h1>
                <p className={styles.subtitle}>Enter a new password for tue account</p>
                <form  className={styles.form}>
                    <label htmlFor="password" className={styles.label}>Password</label>
                    <input type="password" id="password" placeholder="********" className={styles['input input-password']} />

                    <label htmlFor="new-password" className={styles.label}>Re-enter Password</label>
                    <input type="password" id="new-password" placeholder="********" className={styles['input input-password']} />

                    <input type="submit" value="confirm" className={styles['primary-button button-login']}/>
                </form>
            </div>
        </div>
    );
}

export default PasswordRecovery;