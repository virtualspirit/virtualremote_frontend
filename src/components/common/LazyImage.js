import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const LazyImage = ({ alt, src, ...rest }) => {
    return (
        <LazyLoadImage alt={alt} effect="blur" src={src} width={"100%"} {...rest} />
    )
}

export default LazyImage
