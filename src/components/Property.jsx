import React, { useState } from "react";
import { Card } from "./Card";
import "./style.css";
import data from "./db.json";
import { Input } from "./Input";

export const Property = () => {
  const [property, setProperty] = useState(data.property);

  const filterHandler = (location, rent) => {
    console.log(location, rent);
    if (location === "noida" && rent === "six") {
      setProperty(
        data.property
          .filter((data) => data.location === "noida")
          .filter((a) => a.rent >= 6000 && a.rent <= 8000)
      );
    } else if (location === "noida" && rent > 16000) {
      setProperty(
        data.property
          .filter((data) => data.location === "noida")
          .filter((a) => a.rent === "sixteen")
      );
    } else if (
      location === "noida" &&
      rent <= 9000 &&
      rent >= 20000
    ) {
      setProperty(
        data.property
          .filter((data) => data.location === "noida")
          .filter((a) => a.rent === "nine")
      );
    } else if (
      location === "noida" &&
      rent <= 6000 &&
      rent >= 8000 
    ) {
      setProperty(
        data.property
          .filter((data) => data.location === "noida")
          .filter((a) => a.rent=== "six")
          
      );
    }else if(location === "noida" &&
    rent <= 9000 &&
    rent >= 20000 ){
        setProperty(
          data.property
            .filter((data) => data.location === "noida")
            .filter((a) => a.rent=== "nine")
            
        );
      }else if(location === "noida" &&
      rent > 16000 ){
          setProperty(
            data.property
              .filter((data) => data.location === "noida")
              .filter((a) => a.rent=== "sixteen")
              
          );
        }
       else if (location === "noida" && rent === "six") {
            setProperty(
              data.property
                .filter((data) => data.location === "noida")
                .filter((a) => a.rent >= 6000 && a.rent <= 8000)
                  
            );
          } else if (location === "noida" && rent > 16000 ) {
            setProperty(
              data.property
                .filter((data) => data.location === "noida")
                .filter((a) => a.rent === "sixteen")
                
            );
          } else if (
            location === "noida" &&
            rent <= 9000 &&
            rent >= 20000 
           
          ) {
            setProperty(
              data.property
                .filter((data) => data.location === "noida")
                .filter((a) => a.rent === "nine")
                
            );
          } 
         else if (location === "delhi" && rent === "six" ) {
            setProperty(
              data.property
                .filter((data) => data.location === "delhi")
                .filter((a) => a.rent >= 6000 && a.rent <= 8000)
                 
            );
          } else if (location === "delhi" && rent > 16000 ) {
            setProperty(
              data.property
                .filter((data) => data.location === "delhi")
                .filter((a) => a.rent === "sixteen")
                
            );
          } else if (
            location === "delhi" &&
            rent <= 9000 &&
            rent >= 20000 
          ) {
            setProperty(
              data.property
                .filter((data) => data.location === "delhi")
                .filter((a) => a.rent === "nine")
                
            );
          } else if (
            location === "delhi" &&
            rent <= 6000 &&
            rent >= 8000 
          ) {
            setProperty(
              data.property
                .filter((data) => data.location === "delhi")
                .filter((a) => a.rent=== "six")
               
            );
          }else if(location === "delhi" &&
          rent <= 9000 &&
          rent >= 20000 ){
              setProperty(
                data.property
                  .filter((data) => data.location === "delhi")
                  .filter((a) => a.rent=== "nine")
                  
              );
            }else if(location === "delhi" &&
            rent > 16000  ){
                setProperty(
                  data.property
                    .filter((data) => data.location === "delhi")
                    .filter((a) => a.rent=== "sixteen")
                    
                );
              }
             else if (location === "delhi" && rent === "six" ) {
                  setProperty(
                    data.property
                      .filter((data) => data.location === "delhi")
                      .filter((a) => a.rent >= 6000 && a.rent <= 8000)
                       
                  );
                } else if (location === "delhi" && rent > 16000 ) {
                  setProperty(
                    data.property
                      .filter((data) => data.location === "delhi")
                      .filter((a) => a.rent === "sixteen")
                      
                  );
                } else if (
                  location === "delhi" &&
                  rent <= 9000 &&
                  rent >= 20000 
                ) {
                  setProperty(
                    data.property
                      .filter((data) => data.location === "delhi")
                      .filter((a) => a.rent === "nine")
                      
                  );
                }
              else  if (location === "banglore" && rent === "six") {
                    setProperty(
                      data.property
                        .filter((data) => data.location === "banglore")
                        .filter((a) => a.rent >= 6000 && a.rent <= 8000)
                          
                    );
                  } else if (location === "banglore" && rent > 16000 ) {
                    setProperty(
                      data.property
                        .filter((data) => data.location === "banglore")
                        .filter((a) => a.rent === "sixteen")
                        
                    );
                  } else if (
                    location === "banglore" &&
                    rent <= 9000 &&
                    rent >= 20000 
                  ) {
                    setProperty(
                      data.property
                        .filter((data) => data.location === "banglore")
                        .filter((a) => a.rent === "nine")
                       
                    );
                  } else if (
                    location === "banglore" &&
                    rent <= 6000 &&
                    rent >= 8000
                  ) {
                    setProperty(
                      data.property
                        .filter((data) => data.location === "banglore")
                        .filter((a) => a.rent=== "six")
                       
                    );
                  }else if(location === "banglore" &&
                  rent <= 9000 &&
                  rent >= 20000 ){
                      setProperty(
                        data.property
                          .filter((data) => data.location === "banglore")
                          .filter((a) => a.rent=== "nine")
                         
                      );
                    }else if(location === "banglore" &&
                    rent > 16000  ){
                        setProperty(
                          data.property
                            .filter((data) => data.location === "banglore")
                            .filter((a) => a.rent=== "sixteen")
                            
                        );
                      }
                    else  if (location === "banglore" && rent === "six") {
                          setProperty(
                            data.property
                              .filter((data) => data.location === "banglore")
                              .filter((a) => a.rent >= 6000 && a.rent <= 8000)
                               
                          );
                        } else if (location === "banglore" && rent > 16000) {
                          setProperty(
                            data.property
                              .filter((data) => data.location === "banglore")
                              .filter((a) => a.rent === "sixteen")
                             
                          );
                        } else if (
                          location === "banglore" &&
                          rent <= 9000 &&
                          rent >= 20000 
                        ) {
                          setProperty(
                            data.property
                              .filter((data) => data.location === "banglore")
                              .filter((a) => a.rent === "nine")
                              
                          );
                        }  
          else {
      setProperty(data.property);
    }
    console.log(property)
  };

  return (
    <>
      <Input filterHandler={filterHandler} />
      <div className="propertyContainer">
        {property.map((item, ind) => (
          <Card item={item} key={ind} />
        ))}
      </div>
    </>
  );
};
