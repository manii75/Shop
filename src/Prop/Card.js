import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';




function ShoppingCard({t,D,I}) {
  return (
    <>
        <div className="card "class="">
          <div className='row'>    
            <div class="col-4">
          <img src={I} style={{width:"400px"}}/>
        <h1 style={{fontSize:"35px"}}>{t}</h1>
          <h2 style={{fontSize:"18px"}}>{D}</h2>
        
          </div>
          </div>
 
  
        </div>
      
        


      
    </>
  );
};

export default ShoppingCard
