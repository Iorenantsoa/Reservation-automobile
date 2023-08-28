import React from 'react';
import bannerImage from "../../images/navette-gasycar-vip-slide-01.jpg"

const Banner = () => {
  return (
    <div className='banner-contentainer'>
        <img src={bannerImage}  className='shadow card-img-top' alt="BannerImage"/>

    </div>
  )
}

export default Banner