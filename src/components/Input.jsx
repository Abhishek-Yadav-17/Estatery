import React, { useState } from 'react';
import "./style.css";

export const Input = ({filterHandler}) => {
//    const [type,setType]=useState("");
   const [location,setLocation]=useState("");
   const [rent,setRent]=useState("");

    const handleSubmit=(e)=>{
        e.preventDefault();
        
        if(location!=="" && rent!==""){
              filterHandler(location,rent);
        }
    }
  return (
    <>
    <form onSubmit={handleSubmit}>
    <div className='inputContainer'>
        <div>
            <select name="location" onChange={(e)=>setLocation(e.target.value)}>
                <option value="">Location</option>
                <option value="noida">Noida</option>
                <option value="delhi">Delhi</option>
                <option value="banglore">Banglore</option>
            </select>
        </div>
        {/* <div>
            <select name="" id="">
            <option value="">When</option>
                <option value="date1">11/09/2021</option>
                <option value="date2">12/03/2022</option>
                <option value="date2">24/07/2022</option>
            </select>
        </div> */}
        <div>
            <select name="rent" onChange={(e)=>setRent(e.target.value)}>
            <option value="">Price</option>
                <option value="six">Rs. 6K to 8K</option>
                <option value="nine">Rs. 9K to 20K</option>
                <option value="sixteen">Rs. {`>`}16K </option>
            </select>
        </div>
        {/* <div>
            <select name="type" onChange={(e)=>setType(e.target.value)}>
            <option value="">Property Type</option>
                <option value="one">1 BHK</option>
                <option value="two">2 BHK</option>
                <option value="three">3 BHK</option>
            </select>
        </div> */}
        <div><button>Search</button></div>
    </div>
    </form>
    </>
    
  )
}
