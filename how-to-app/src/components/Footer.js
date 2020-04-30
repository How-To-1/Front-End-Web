import React from 'react'
import styled from 'styled-components'


const FooterStyle =styled.div`
    background-color: #e8e2db;
    border-top: 1px solid #E7E7E7;
    text-align: center;
    padding: 20px;
    position: fixed;
    left: 0;
    bottom: 0;
    height: 60px;
    width: 100%;
`

const GhostSpacing=styled.div`
    display: block;
    padding: 20px;
    height: 60px;
    width: 100%;
` 


const Footer=() => {

    return(
        <div>
            <GhostSpacing />
            <FooterStyle>
                How to do Everything
            </FooterStyle>
        </div>
    )
}

export default Footer