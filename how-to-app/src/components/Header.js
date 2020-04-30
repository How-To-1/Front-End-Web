import React from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

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

                <PageLinks>
                    <Link to ='/'>
                        <button>Home</button>
                    </Link>
                </PageLinks>

                <PageLinks>
                    <Link to ='/Account'>
                    <button>Account</button>
                    </Link>
                </PageLinks>

                <PageLinks>
                    <Link to ='/SignUpPage'>
                        <button>Sign Up</button>
                    </Link>
                </PageLinks>

                <Route exact path ='/'>
                    <HomePage />
                </Route>

            </PageHeader>
        </div>
    )
}

export default Header */