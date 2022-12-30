import './App.css';
import Hamburger from './Components/Hamburger/Hamburger';
import Header from './Components/Header/Header';
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import BookList from './Components/BookList/BookList';
import BookDetails from './Components/BookDetails/BookDetails';
import Searchbar from './Components/SearchBar/SearchBar'
import BookModel from './Models/BookModel'

function App() {
  let BookLists = BookModel;
  const [searchResults, setSearchResults] = useState(BookLists);

  return (
    <Router>
      <div className="app">
        <Container>
          <Row className='App-header'>
            <Container>
              <Row>
                <Col xs={1}>
                  <Hamburger /></Col>
                <Col xs={11} className="center">
                  <Header />
                </Col>
              </Row>
              <Row>
                <Searchbar books={BookLists} setSearchResults={setSearchResults} />
              </Row>
            </Container>
          </Row>

          <Row>

            <Routes>

              <Route exact path="/" element={<BookList  BKList={searchResults}/>} />
              <Route path="/BookDetails" element={<BookDetails Books={BookLists} />} />

            </Routes>

          </Row>

        </Container>
      </div>
    </Router>
  );
}

export default App;
