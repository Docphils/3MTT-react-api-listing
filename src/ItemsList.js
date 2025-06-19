import React from "react";
import ImageSlider from "./ImageSlider";

export default function ItemsList(items) {
    return (
        <div className='body'>
            <ul className='items'>
                {items.items.map((item) => (
                    <li key={item.id} className='itemCard'>
                        <div className='images'>
                            <ImageSlider key={item.id} images={item.images} />
                        </div>
                        <div className='itemTitle'>{item.title}</div>
                        <div className='itemDesc'>{item.description}</div>
                        <div className='itemPrice'>&#8358;{item.price}</div>
                        <div className='itemButtons'>
                            <button className='add'>Add to cart</button>
                            <button className='buy'>Buy now</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
