import React, { Component } from 'react'
import ReactDom from 'react-dom';
import App from './App';
import index from './index.css';
//import Book from './Book.js';

const books=[

  {
    id:1,
    img:"https://images-na.ssl-images-amazon.com/images/I/81xt1+yUfhL._AC_UL160_SR160,160_.jpg",
    author:"vishnu",
    title:"Hardcover",
  },
  {
    id:2,
    img:"https://sp.yimg.com/ib/th?&id=ODL.c461383703765bc81af6f2b1ce034b84",
    author:"Collen Hower",
    title:"Its Endwith Us",
  },
  {
    id:3,
    img:"https://sp.yimg.com/ib/th?&id=ODL.7f61871c0d48f1d986d778561c499bc0",
    author:"J.K.Rowling",
    title:"Harry Potter",
  }
]

  



const BookList=()=>
{
 // const{img,author,title,number}=props;
  return (
  <>
    {books.map((book)=>{
      return(
        <Book key ={book.id} book={book}/>
      );
    }
    )}
     
  </>
  );
}

const Book =(props)=>
{
  const {book}=props;
  const{img,author,title}=book;
  return(
    <>
      <h1>{author}</h1>
      <h2>{title}</h2>
      <h3><img src={img} alt="good"/></h3>
    </>
      );

}



ReactDom.render(<BookList/>,document.getElementById('root'))