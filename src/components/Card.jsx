import React from 'react';
import "./style.css";

export const Card = ({item}) => {
  return (
    <div className='cardContaienr'>
        <div className='imageContainer'>
            <img src={item.image} alt="pic" />
        </div>
        <div className='detailContainer'>
            <div style={{display:"flex", justifyContent:"space-around"}}>
                <span>Rs. {item.rent}/month</span>
                <span>❤️</span>
            </div>
            <div>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
            </div>
            <div style={{display:"flex", justifyContent:"space-around"}}>
                <span><strong>{item.num_of_beds}</strong><em> Beds</em> </span>
                <span><strong>{item.num_of_washroom}</strong> <em> Washroom</em></span>
                <span><strong>{item.location}</strong> <em> Location</em></span>
            </div>
        </div>
    </div>
  )
}
