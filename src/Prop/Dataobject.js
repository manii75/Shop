import React from 'react';
import Data from './Data';

import img from '../asset/Advance-Diploma-in-Computer-Application-ADCA.png';
import img1 from '../asset/Advance-Diploma-in-Computer-Application-Programming-ADCAP-1.png';
// import img2 from '../asset/Advance-Diploma-in-Desktop-Publishing-Graphic-Designing-ADDP.jpg';
// import img3  from '../asset/dress4.jpg';
// import img4 from '../asset/drees6.jpg';
import 'bootstrap/dist/css/bootstrap.css';

function Dataobject() {


  const Data = [
    {
      image:img,
      title:"Advance Diploma in Computer Application (ADCA)",
    },  
    {
      image:img1,
      title:"Advance Diploma in Computer Application (ADCA)",
    }
  ];



  return (
    <section>
      <div className='container'>
     
          
            {
            Data.map((item, index) => (
              <div>
                 <Data
                key={index}
                I={item.image}
                title={item.title}
       
              />
              </div>
             
            ))}
            
        </div>
 
    </section>
  );
}

export default Dataobject;
