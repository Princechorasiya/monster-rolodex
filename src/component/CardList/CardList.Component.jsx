import React from 'react'
import "./cardList.css";
import Card from './../Card/Card.Component';
const CardList = ({name,children,monsters}) => {
  console.log(children)//children prop passed btw card lsit 
  return (
    <>
      <div className="card-list">
        {monsters.map((monster) => (
        <Card key ={monster.id} monster ={monster}/>
        // use key whenever we are using map
      ))}
      </div>
    </>
  );
}

export default CardList