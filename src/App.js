import React, { useState, useEffect } from "react";
import CardList from "./componentes/card-list/cardList.component";
import SearchInput from './componentes/search-box-component/searchBox.component';
import MonsterContext from "./componentes/create-Context/appContext";
import './app.css';

const App = () => {
  const [monsters, setMonsters] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((user) => setMonsters(user));
  }, []);

 

  // useEffect(()=>{
  //

  // },[text])
  const result = monsters.filter((monster) =>
    monster.name.toLowerCase().includes(text.toLowerCase())
  );

  return (
    <MonsterContext.Provider value={{result,text,setText}}>
   
      <SearchInput />
      <CardList />
    </MonsterContext.Provider>
  );
};

export default App;
