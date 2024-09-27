import React, { useState } from 'react';
import Card from './Card';
import data from './Data.json';
import image from '../asset/Advance-Diploma-in-Computer-Application-ADCA.png'


function Shopbject() {
    const [cards,setCards]=useState(data);
  return (
    <div>
        {
        cards.map(card => {
            return (
            <Card key={card.id} t={card.title}  D={ card.descrption}  I={card.image}/>
            )

          }
          
        )}
    </div>
  )
}

export default Shopbject
