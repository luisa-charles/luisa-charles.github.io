import React from 'react';

const ProjectImage = ({ images, alts }) => {
    return(
    <div>
        <figure>
                {images.map((image, i) => <img key={i} src={image} />)}
            {/* <img src={image} alt={alt} /> */}
        </figure>
    </div>
    )
}

export default ProjectImage;