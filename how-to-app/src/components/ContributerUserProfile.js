import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import {
  fetchHowTo,
  postHowTo,
  getUserName,
} from "./store/actions/actionIndex";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { Link, useHistory } from "react-router-dom";
import {
  Button,
  Form,
  FormGroup,
  Card,
  DropdownMenu,
  DropdownItem,
  Row,
  Col,
  Dropdown,
} from "reactstrap";
import GuideCreator from "./GuideCreator";
import "../App.css";
import EditHowTo from "./EditHowTo";
import {PrivateRoute} from '../utils/PrivateRoute';
import styled from 'styled-components';


//styles
const UserPage = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
align-content:space-around;
`
const GuideBuilderBox = styled.div`
align-items:center;
background-color:#1a3263;
border:4px solid #fab958;
padding:10px;
color:white;
`
const InputBox = styled.div`
display:flex;
`

const SearchBox = styled.div `
display:flex;
flex-direction:column;
background-color:#1a3263;
border:4px solid #fab958;
padding:10px;
flex-basis:100%;
margin-top:10px;
color:white;
`

const Searchresults = styled.div`
display:flex;
flex-direction:column;
justify-content: center;
`




const initialState = {
  title: "",
  description: "",
};

const ContributerUserProfile = (props) => {
  const [newHowTo, setNewHowTo] = useState({
    title: "",
    description: "",
    guides_id: Date.now(),
    category: "",
  });
  

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [newState, setNewState] = useState([]);
  const history = useHistory();

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    const results = props.guides.filter((guide) =>
      guide.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  }, [searchTerm]);

  useEffect(() => {
    props.fetchHowTo()
        
  }, []);

//   useEffect(() => {
//     props.postHowTo();
//     history.push("/user");
//   }, []);
const processing = id => {
    setTimeout(()=>{
        props.history.push('/')
    }, 1000)
}



  const changeHandler = (e) => {
    setNewHowTo({ ...newHowTo, [e.target.name]: e.target.value });
  };

  const submitForm = (e) => {
    e.preventDefault();
    processing();
    props.history.push('/user')
  };

  return (
    <div>
      <UserPage>
        <h1> Welcome To Your Dashboard </h1>
        <h2>Create New How To</h2>
        <GuideBuilderBox>
        <Form onSubmit={submitForm}>
          <FormGroup>
            <InputBox>
            <label>
              Add A Title:
              <input
                name="title"
                id=""
                type="text"
                onChange={changeHandler}
                value={newHowTo.name}
              />
            </label>
            </InputBox>
          </FormGroup>
          <FormGroup>
            <InputBox>
            <label>
              Add Instructions:
              <textarea
                name="description"
                id=""
                type="text"
                onChange={changeHandler}
                value={newHowTo.name}
              />
            </label>
            </InputBox>
          </FormGroup>
          <FormGroup>
            <InputBox>
            <label htmlFor="category">
              Choose A Category:
              <select
                id="category"
                name="category"
                onChange={changeHandler}
              >
                <option onChange={changeHandler} value="automotive">
                  Automotive
                </option>
                <option onChange={changeHandler} value="Electonics">
                  Electronics
                </option>
                <option onChange={changeHandler} value="Food">
                  Food
                </option>
                <option onChange={changeHandler} value="Home">
                  Home
                </option>
              </select>
            </label>
            </InputBox>
          </FormGroup>

          <Button type="submit" onClick={() => props.postHowTo(newHowTo)}>
            Submit
          </Button>
        </Form>
        </GuideBuilderBox>

        <SearchBox>
          <h3>Search Guides By Title To Edit</h3>
          <input
            type="text"
            placeholder="Search Guides"
            value={searchTerm}
            onChange={handleSearch}
          />
        </SearchBox>

        <>
        <Searchresults>
          {searchResults.map((item) => {
            return (
              <Row>
                <Col sm="6">
                  <Card
                    className="searchBody"
                    body
                    inverse
                    style={{
                      backgroundColor: "#1A3263",
                      borderColor: "#1A3263",
                    }}
                  >
                    <h3>{item.title}</h3>
                    <h5>Guide:</h5>
                    <p>{item.description}</p>
                    <h5> Category:</h5>
                    <p>{item.category}</p>

                <Link to={`/update-howto/${item.id}`}>
                    
                      <Button outline color="primary">
                          
                        Edit
                      </Button>
                    </Link>
                    {/* <Button outline color="danger" onClick={()=> deleteHowTo(item.id)}>Delete How To</Button> */}
                  </Card>
                </Col>
              </Row>
            );
          })}
          </Searchresults>
        </>

        {/* <h2>List of Guides</h2>
        {console.log(props.guides, 'current guides prop.guides')}
        {props.guides.map(guide =>{
        
            return(
            <div key={guide.id}>

                <h3>{guide.title}</h3>
                <h4>Steps:</h4>
                <p> {guide.description}</p>
                <h4>Category:</h4>
                <p>{guide.category}</p>
                <button onClick={()=> deleteHowTo(guide.id)}>Delete How To</button>
                 
                 
                 <Link to={`/update-howto/${guide.id}`}>
                     <div>Edit</div> 
                </Link>

                <Link onClick={()=> saveHowTo(guide.id)} to={`/saved-guides/`}>
                    <div>Save Guide</div>
                </Link>


               
        
        </div>)
         })}  */}
      </UserPage>
    </div>
  );
};
const mapStateToProps = (state) => {
  console.log("userprofile map state", state);
  return {
    guides: state.howToReducer.guides,
    isFetching: state.howToReducer.isFetching,
    error: state.howToReducer.error,
    addingtHowTo: state.howToReducer.addingtHowTo,

    username: state.userReducer.username,
  };
};

export default connect(mapStateToProps, { fetchHowTo, postHowTo, getUserName })(
  ContributerUserProfile
);
