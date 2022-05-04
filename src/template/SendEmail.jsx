import React from 'react';
import Image from 'next/image';
import styles from '@styles/SendEmail.scss';
import logo from '@logos/logo_yard_sale.svg';
import email from '@icons/email.svg';

const SendEmail = () => {
    return (
         <div className={styles['send-email']}>
            <div className={styles['form-container']}>
                <Image src={logo} alt="logo" className={styles.logo} />

                <h1 className={styles.title}>Email has been sent!</h1>
                <p className={styles.subtitle}>Please check your inbox for instructions on how to reset the password</p>

                <div className={styles['email-image']}>
                    <Image src={email} alt="email" />
                </div>
                
                <button className={styles['primary-button login-button']}>Login</button>

                <p>
                    <span>Didn'n receive the email?</span>
                    <a href="/">Resend</a>
                </p>
            </div>
        </div>
    );
}

export default SendEmail;