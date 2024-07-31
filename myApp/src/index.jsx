import React from 'react';
import ReactDom from 'react-dom';
import './index.css' 

const books = [{
    img:'/images/booklist1.jpeg',
    title: 'How To Start Coding.',
    author: 'Emperor Tatty'
},

{
    img:'/images/booklist2.jpeg',
    title: 'How To Start Coding.',
    author: 'Emperor Tatty'
}
]


function BookList() {
    return (
      <section className="booklist">
        {books.map((book)=>{
          return <Book book ={book}></Book>;
        })}
      </section>
    );
}

const Book = (props) => {  
  const{img, title,author} = props.book;

    return (
     <article className='book'>
        <img src={img} alt=''/>
        <h1>{title}</h1>
        <h2>{author}</h2>
     </article>
    );
};




ReactDom.render(<BookList/>, document.getElementById('root')
);                     