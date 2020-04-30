import React, { useState, useEffect} from "react";
import {Card, Row, Col} from 'reactstrap'
import {fetchHowTo, postHowTo, getUserName} from './store/actions/actionIndex';
import {connect} from 'react-redux';


const Searcher = props => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    const results = props.guides.filter((guide) =>
      guide.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  }, [searchTerm]);

  useEffect(()=>{
    props.fetchHowTo();
}, [])

  return (
    <div>
      <div>
        <h2>Search Guides By Title To Edit</h2>
        <input
          type="text"
          placeholder="Search Guides"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>

      <>
        {searchResults.map((item) => {
            console.log('search', item);
          return (
            <Row>
              <Col sm="6">
                <Card
                  className="searchBody"
                  body
                  inverse
                  style={{ backgroundColor: "#1A3263", borderColor: "#1A3263" }}
                >
                  <h3>{item.title}</h3>
                  <h5>Guide:</h5>
                  <p>{item.description}</p>
                  <h5> Category:</h5>
                  <p>{item.category}</p>
                </Card>
              </Col>
            </Row>
          );
        })}
      </>
    </div>
  );
}; //going to close component


const mapStateToProps = state =>{
    console.log('userprofile map state', state);
    return{
        guides: state.howToReducer.guides,
        isFetching: state.howToReducer.isFetching,
        error: state.howToReducer.error,
        addingtHowTo: state.howToReducer.addingtHowTo,


        username: state.userReducer.username
       
        
    }
}
     export default connect(mapStateToProps, {fetchHowTo, postHowTo, getUserName})( Searcher);
