import React from 'react';
import Image from 'next/image';
import atyles from '@styles/NotFound.scss'; 

import notFount1 from '@img/online-shop.gif';
import notFount from '@img/notfound.gif';

const NotFount = () =>{
    return(
        <div className={styles['content-not-found']}>
            <div className={styles.row}>
                <div className={styles['col-6']}>
                    <Image src={notFount} alt="" />
                </div>
                <div className={styles['col-6 text']}>
                    <h1>Page</h1>
                    <h2>Not Found</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    <a href="/" className={styles['button-back']}>
                        <span>Go Back</span>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default NotFount;