import React,{useContext} from "react";
import './searchBox-styles.css';
import MonsterContext from '../create-Context/appContext';

const SearchInput = () =>{ 
  
  const {text,setText} =useContext(MonsterContext);
  console.log(text);
  return (
  <div className='center'>
  <h1>Monster Roledex</h1>
    <input
      className="search"
      type="serach"
      placeholder="Serach Monster"
      value={text}
      onChange={(e) => setText(e.target.value)}
    />
  </div>
)};

export {SearchInput as default};