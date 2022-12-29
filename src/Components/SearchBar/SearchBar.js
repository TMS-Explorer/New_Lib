import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import './SearchBar.css'

const SearchBar = ({ books, setSearchResults }) => {
  const handlerSumbit = (e) => e.preventDefault()

  const handleSearchChange = (e) => {
    if (!e.target.value) return setSearchResults(books)

    const resultArray = books.filter(p => p.Author.match(new RegExp(e.target.value, "i")) || p.BName.match(new RegExp(e.target.value, "i")) )
    setSearchResults(resultArray)
  }

  return (
    <header>
      <form className='search' onSubmit={handlerSumbit}>
        <input
          className='search_input'
          type='text'
          id='search'
          placeholder='  Search Book/Author'
          onChange={handleSearchChange} />
        <button className='search_button'>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </form>

    </header>
  )
}

export default SearchBar
