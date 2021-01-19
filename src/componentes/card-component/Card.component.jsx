import React from "react";
import './card.styles.css';

const Card = ({monster}) => (
  <div className='card-container'>
  <img src={`https://robohash.org/${monster.id}?set=set2`} alt='Monster' height={180} width={180}/>
  <h1>{monster.name}</h1>
  <h2>{monster.email}</h2>
    </div>
    );


export { Card as default };
