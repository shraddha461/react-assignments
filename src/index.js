import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import bookData from "./bookData.json";


//Defining book details
const BookDetails = (props) => {
    console.log(props);
    return <>

        <article className="book">
            <div className="book-bg">
                <section style={{ color: '#f8f8f8', margin: 30 + 'px' }}>
                    <img src={props.book.img} alt="book" height='300px' width='200px'></img>
                </section>

            </div>
            <section className="bookdetails" >
                <p>{props.book.sponsorship}</p>
                <div className="bookDetails_name">{props.book.name}</div>
                <span>by <span style={{ color: 'rgb(26 161 148)' }}>{props.book.author}</span> | {props.book.published}</span>
                <h3 style={{ color: 'rgb(26 161 148)' }}>{props.book.type}</h3>
                <h1 style={{ fontSize: 24 + 'px' }}>{props.book.price}</h1>
                <span>Get it by {props.book.delivery}</span>
            </section>

        </article>
    </>
}


//type 1 using props
const Book1 = (props) => {

    return <>
        <BookDetails book={props.book} />
    </>
}

//returning props in each book from array
const Booklist1 = () => {

    return <>
        <div className="booklist">
            <Book1 book={bookData[0]} />
            <Book1 book={bookData[1]} />
            <Book1 book={bookData[2]} />
            <Book1 book={bookData[3]} />
            <Book1 book={bookData[4]} />
            <Book1 book={bookData[5]} />
        </div></>

}

//type 2 using array and map
const Book2 = bookData.map((book) => {
    return <>

        <BookDetails book={book} />

    </>
})

//rendering book list using list
const Booklist2 = () => {
    return <>
        <div className="booklist">
            {Book2}
        </div>
    </>
}

//Booklist1 and Booklist2 should be looking ideally same
ReactDOM.createRoot(document.getElementById("root")).render(<Booklist2 />);
