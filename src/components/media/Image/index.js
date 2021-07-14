import React from 'react';
import styles from './image.module.css';

const styleDef = {
    imageWrapper: 'imageWrapper',
    ratio: 'ratio'
}

const AspectRatio = (props) => {
    const {ratio} = props; 
    return (
        <div className={`${styles.imageWrapper} ${styles[ratio]}`}>
            {props.children}
        </div>
    );
}

const Picture = ({url, alt}) => (
    <picture>
        <source srcSet={url + '.webp'} type="image/webp" />
        <img className={styles.image} src={url} alt={alt} />
    </picture>
)

const Image = ({ url, alt, aspectRatio}) => {
    const imageData = {url, alt}
    const aspectRatioDefinition = aspectRatio ? styleDef.ratio + aspectRatio : '';
    if(aspectRatio){
        return (
            <AspectRatio ratio={aspectRatioDefinition}>
                <Picture {...imageData} />
            </AspectRatio>
        )
    }
    return <Picture {...imageData} />;
}

export default Image;