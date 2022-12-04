import React from 'react';
import Link from 'next/link';
import { RiWhatsappFill } from "react-icons/ri";
import { urlFor } from '../lib/client';

const HeroBanner = ({ heroBanner }) => {
  return (
    <div className="hero-banner-container">
      <div>
        <p className="beats-solo">{heroBanner.smallText}</p>
        <h3>{heroBanner.midText}</h3>
        <h1>{heroBanner.largeText1}</h1>
        <img src={urlFor(heroBanner.image)} alt="neckless" className="hero-banner-image" />

        <div>
        <Link href={`/product/${heroBanner.product}`}>
            <button type="button">{heroBanner.buttonText}</button>
          </Link>
          <div className="desc">
            <h5>Be-Oxi</h5>
            <p>{heroBanner.desc}</p>
          </div>       
        </div>
      </div> 
      <Link href="https://wa.me/919800139040">
      <button width="50px" className="btn_whatsapp_home">
      <RiWhatsappFill />
      </button>
    </Link>
    </div>
    
  )
}

export default HeroBanner