import React,{useContext} from 'react';
import './cardlist.styles.css';
import Card from "../card-component/Card.component";
import MonsterContext from '../create-Context/appContext';

const CardList = () =>{
  const {result:monsters}=useContext(MonsterContext);
    return (
      <div className="card-list">
      
        {monsters.map((monster) =>  <Card key={monster.id} monster={monster} />
        )}
      </div>
    );

}
export {CardList as default}