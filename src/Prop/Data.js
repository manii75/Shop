import React from 'react'
import './card.css';

    function Data({propes}) {
      return (
        <div className='card row'>
          <div className='col-4'>
          <img src={propes.I} alt={"hey"} className='card-image' />
          <h3 className='card-title'>{propes.title}</h3>
          </div>
       
        </div> 
      );
    } 


export default Data

