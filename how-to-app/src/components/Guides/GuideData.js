import React from 'react';
import styled from 'styled-components'

const GuideContainer = styled.div`
display:flex;
padding:30px;
`

const GuideCard = styled.div `
align-content:flex-start;;
width:70%;
display:flex;
flex-direction:column;
justify-content:space-evenly;
background-color:blue;
border:5px solid black;
padding:20px;
`
const GuideTitle = styled.div `
margin:10px;
color:white;
padding-left:20px;
`

const GuideDescription = styled.div `
margin:10px;
color:white;
padding-left:20px;
`

const GuideImage = styled.div `
margin:10px;
color:white;
padding-left:20px;
`

const GuideData =(props) => {
const {
    title,
    description,
    image
    }=props.item;

    return (
        <div>
            <GuideContainer>
                <GuideCard>
                    <GuideTitle>{title}</GuideTitle>
                    <GuideDescription>{description}</GuideDescription>
                    <GuideImage>{image}</GuideImage>
                </GuideCard>
            </GuideContainer>
        </div>
    )
}

console.log(GuideData)

export default GuideData;