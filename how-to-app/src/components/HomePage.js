import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import GuideData from './Guides/GuideData.js'
import GuideLoader from './Guides/GuideLoader.js'

const GuideRender= styled.div`
display:flex;
flex-direction:column;
justify-content:space-between;
border: 5px black;
`

const HomePage = () => {

    const[guide, setGuide]=useState([]);
    const apiLink ='https://how-to-guide-unit4-build.herokuapp.com/api/guides/'


    useEffect(() => {
        axios
        .get(apiLink)
        .then(response => setGuide(response))
        .catch(err =>
            console.log(err));
    }, []);
    console.log(guide)

    if (!guide) return <GuideLoader />;
    

    return (
        <div>
        {/* <GuideRender>
            {guide.map(item => (
                <GuideData key={item} item={item} />
            ))} 
        </GuideRender> */}
        <div>
            <button>Create Article</button>
        </div>
        </div>
    )
}


export default HomePage