import React from 'react'
import './BookList.css'
import Book from '../Book/Book';
const BookList = props => {
    const queryParams = new URLSearchParams(window.location.search);
    const genre = queryParams.get('genre');
    let pics = []
    if (props.BKList.length <= 0) {
        return(
            <div className='no-matching'>
            <strong> Opps! No Matching Book or Author Available !!!</strong>
            </div>
        ) 
    }
    else {
        if (!genre) {
            pics = props.BKList
        }
        else {
            pics = props.BKList.filter((val) => { return val.genre === genre })
        }
        const openBook = (id) => {
            window.open('/BookDetails/?id='+ id, '_self', 'noopener,noreferrer');
        }


        return (
            <div className='List'>
                {pics.map((pic) => (
                    <div onClick={() => openBook(pic.id)}>
                        <Book animatedCard={true} book={pic} />
                    </div>
                ))}

            </div>
        )
    }
}

export default BookList