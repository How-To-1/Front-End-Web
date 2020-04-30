import React from 'react'
import styled from 'styled-components'


const FooterStyle =styled.div`
    background-color: #e8e2db;
    border-top: 1px solid #E7E7E7;
    text-align: center;
    padding: 15px;
    /* position: fixed; */
    left: 0;
    bottom: 0;
    height: 30%;
    width: 100%;
    color:black;
`



const Footer=() => {

    return(
        <div>
    
            <FooterStyle>
                <img src='https://dewey.tailorbrands.com/production/brand_version_mockup_image/524/2930508524_fcc14525-464e-4936-a671-881feb13ce35.png?cb=1588276312'/>
            </FooterStyle>
        </div>
    )
}

export default Footer