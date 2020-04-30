import React from 'react';
import styled from 'styled-components'

const GuideContainer = styled.div`
display:flex;
padding:30px;
`

const GuideCard = styled.div `
align-content:flex-start;
width:70%;
display:flex;
flex-direction:column;
justify-content:space-evenly;
background-color:#fc6b3f;
border:5px solid #fff6da;
border-radius:12px;
padding:20px;
box-shadow:0 91px 80px -62px rgba(0, 0, 0, 0.4);
`
const GuideTitle = styled.div `
margin:10px;
font-size:30px;
color:black;
padding-left:20px;
text-align:left;
border:2px 
`

const GuideDescription = styled.div `
margin:10px;
color:#262525;
text-align:left;
`

const GuideImage = styled.img `
border-radius:12px;
box-shadow:0 91px 80px -62px rgba(0, 0, 0, 0.4);
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
                    <GuideImage src = {image}></GuideImage>
                    <GuideTitle>{title}</GuideTitle>
                    <GuideDescription>{description}</GuideDescription>
                    
                </GuideCard>
            </GuideContainer>
        </div>
    )
}

console.log(GuideData)

export default GuideData;