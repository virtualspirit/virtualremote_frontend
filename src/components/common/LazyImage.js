import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const LazyImage = ({ alt, src, noNeedWidth, ...rest }) => {
    return (
        <LazyLoadImage alt={alt} effect="blur" src={src} {...(!noNeedWidth && { width: "100%" })} {...rest} />
    )
}

export default LazyImage
