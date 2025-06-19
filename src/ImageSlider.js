import React, {useState} from "react";

const ImageSlider = ({images}) => {
    const [index, setIndex] = useState(0);

    const nextImage = () => {
        setIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevImage = () => {
        setIndex(
            (prevIndex) => (prevIndex - 1 + images.length) % images.length
        );
    };

    return (
        <div className='imageSlider'>
            <img
                className='itemImage'
                src={images[index]}
                alt={`Product ${index}`}
            />
            <div className='imagesButtons'>
                <i
                    className='fa-solid fa-circle-arrow-left'
                    onClick={prevImage}
                ></i>
                <i
                    className='fa-solid fa-circle-arrow-right'
                    onClick={nextImage}
                ></i>
            </div>
        </div>
    );
};

export default ImageSlider;
