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
      <div>
        <h1> Dashboard </h1>

        <Form onSubmit={submitForm}>
          <FormGroup>
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
          </FormGroup>
          <FormGroup>
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
          </FormGroup>
          <FormGroup>
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
          </FormGroup>

          <Button type="submit" onClick={() => props.postHowTo(newHowTo)}>
            Submit
          </Button>
        </Form>

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
      </div>
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
