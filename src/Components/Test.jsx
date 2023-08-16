import React from 'react'
import Slider from 'react-slick'

function Test() {

    let images = [
        'https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/31/8792d615-bdb3-4d83-92ca-512ae53558441690744755579-DB.png',
        'https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/28/0174e4d7-448c-4746-8572-69461ad5be101659020268081-Tops---Tees_Desk.jpg',
        'https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/25/179e278f-77ee-44c2-bf39-9f00b0cd08e01658752429301-Handbags_Desk.jpg',
        'https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/31/4031994d-9092-4aa7-aea1-f52f2ae5194f1654006594976-Activewear_DK.jpg'
    ]
    // const settings = {
    //     dots: true,
    //     infinite: true,
    //     speed: speed,
    //     slidesToShow: slideToShow,
    //     slidesToScroll: slidesToScroll,
    //     autoplay: isAutoPlay,
    //     autoplaySpeed: autoPlaySpeed, // set the time interval for automatic sliding
    // };
    return (
        <div>

           
                {images.map((image, index) => (
                    <div key={index}>
                        <img
                            src={image} className="d-block w-100" 
                            // className="h-full w-full object-cover sm:h-[80vh] sm:object-contain"
                            alt={`Slide ${index}`}
                        />

                    </div>
                ))}
         
        </div>
    )
}

export default Test