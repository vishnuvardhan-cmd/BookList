import React from 'react';
import index from './index';
const Book=(props)=>

{
  console.log(props.name);
  return (
    <>
    <p>{props.job}</p>
    <p>{props.name}</p>
    <p>{props.number}</p>
    
    {/* {<h1>{author.toUpperCase()}</h1>
    <h2>{title}</h2>
    <img src={img} alt="dood"/> } */}
    </>
  )
}

export default Book;