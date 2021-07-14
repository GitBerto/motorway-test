import React from 'react';
import Author from '../../content/Author';
import Image from '../../media/Image';
import styles from './card.module.css';

const Card = (props) => {
    const {url, description, alt_description } = props.data;
    const {likes} = props.data;
    return (
        <div className={styles.card}>
            <div className={styles.authorContent}>
                <Author {...props.data.user} />    
            </div>
            
            <div className={styles.imageContent} onClick={() => props.openModal(<Image url={url} alt={alt_description} />)}>
                <Image url={url} alt={alt_description} aspectRatio="16-9"/>

                <div className={styles.imageLikes}>
                    {likes}
                </div>
            </div>

            {description && (
                <div className={styles.description}>
                    <p>
                        {description}
                    </p>
                </div>
            )}
        </div>
    );
}

export default Card;