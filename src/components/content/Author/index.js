import React from 'react';
import Image from '../../media/Image';
import styles from './author.module.css';

const Author = (props) => {
    const {name, profile_image} = props;
    return (
        <div className={styles.author}>
            <div className={styles.image}>
                <Image url={profile_image} alt={name} />
            </div>
            <div className={styles.fullname}>
                {name}
            </div>
        </div>
    );
}

export default Author;