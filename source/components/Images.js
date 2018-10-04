import React from 'react';
import Image from "./Image";
import images from '../theme/assets/images'

export default class Images extends React.Component {
    render() {
        const imagesJSX = images.map((image) => {
            return (
                <Image
                    key = { image.id }
                    src = { image.src }
                />

            );
        });

        return <div className = 'images'>{imagesJSX}</div>;
    }
}
