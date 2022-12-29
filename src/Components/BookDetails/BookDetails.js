import React from 'react'
import './BookDetails.css';

const BookDetails = props => {

  const queryParams = new URLSearchParams(window.location.search);
  const id = parseInt(queryParams.get('id'));
  let BookDet = props.Books.filter((val) => { return val.id === id })[0]

  return (
    <div className='detail-container'>
      <div className='book-details-image'>
        <img className='book-det-img'alt={BookDet.BName} src={BookDet.Name} />
      </div>
      <div className='book-details'>
        <span className='book-det-name'>
          <strong>{BookDet.BName}</strong><br />
        </span>
        <span className='book-det-Aname'>
          <strong>Author Name: </strong> {BookDet.Author}<br />
        </span>
        <span className='book-det-yop'>
          <strong>Year of Publication: </strong>{BookDet.yop}<br />
        </span>
        <span className='book-det-genre'>
          <strong>Genre: </strong>{BookDet.genre}<br />
        </span>
      </div>
    </div>
  )
}


export default BookDetails
