import React , { Fragment } from 'react';
import './Book.css';


const Book = props => {
  return (
    <div>
      <Fragment>
            {props.animatedCard ?
                <div className="card-container">
                    <div className="card-body">
                    <div className='Center-align-pic'>
                    <img className='book-image'  alt={props.book.BName} src={props.book.Name} />
                    </div>
                    <div className='Center-align'>
                        <span className='text-center-align'>
                        <b>{props.book.BName}</b><br/>
                        </span>
                        <span className='text-center-align'>
                        <b>Author Name:</b> {props.book.Author}<br/>
                        </span>
                        <span className='text-center-align'>
                        <b>Year of Publication:</b>{props.book.yop}<br/>
                        </span>
                    </div>
                    </div>
                </div> : null
}
 </Fragment>
    </div>
  )
}

export default Book
