import React from "react";

import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/scss/image-gallery.scss"
import './Gallery.scss'

const images = [
    {
        original: "https://kontra-banda.ru/preview.jpg",
        thumbnail: "https://kontra-banda.ru/preview.jpg",

    },
    {
        original: "https://kontra-banda.ru/preview.jpg",
        thumbnail: "https://kontra-banda.ru/preview.jpg",

    },
    {
        original: "https://kontra-banda.ru/preview.jpg",
        thumbnail: "https://kontra-banda.ru/preview.jpg",

    },
    {
        original: "https://kontra-banda.ru/preview.jpg",
        thumbnail: "https://kontra-banda.ru/preview.jpg",

    },
    {
        original: "https://kontra-banda.ru/preview.jpg",
        thumbnail: "https://kontra-banda.ru/preview.jpg",

    },
    {
        original: "https://kontra-banda.ru/preview.jpg",
        thumbnail: "https://kontra-banda.ru/preview.jpg",

    },
    {
        original: "https://kontra-banda.ru/preview.jpg",
        thumbnail: "https://kontra-banda.ru/preview.jpg",

    },
    {
        original: "https://kontra-banda.ru/preview.jpg",
        thumbnail: "https://kontra-banda.ru/preview.jpg",

    },
    {
        original: "https://kontra-banda.ru/preview.jpg",
        thumbnail: "https://kontra-banda.ru/preview.jpg",

    },
    
]
const someComponent = props => {
    // console.log(props.someProps.objectKey)
    return <div>{/* {props.someProps.objectKey} */}</div>;
};

const Gall = () => {

    return (
        <div className="wrapper">
            
            <ImageGallery
                items={images}

                slideDuration={300}

                showThumbnails={true}
                lazyLoad={true}

                showPlayButton={false}
                renderCustomControls={someComponent}

            />
        </div>

    );
}
export default Gall