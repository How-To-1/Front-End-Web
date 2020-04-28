import React from 'react'
import styled from 'styled-components'

const PageHeader = styled.nav `
    box-sizing: border-box;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    padding: 1em;
    margin-bottom: 2em;
    background-color: #e8e2db;
    color: black;
`
const PageLinks = styled.a `
padding-left:10px;
padding-right:10px;
`

const Header=() => {

    return(
        <div>
            <PageHeader>
                <span>
                    How To Do Anything
                </span>
                <PageLinks>Home</PageLinks>
                <PageLinks>Account</PageLinks>
            </PageHeader>
        </div>
    )
}

export default Header