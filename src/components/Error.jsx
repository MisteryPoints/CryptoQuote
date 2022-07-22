import styled from '@emotion/styled'
import React from 'react'

const Text = styled.p`
    background-color: #ffffff;
    width: 100%;
    font-family: 'Lato', sans-serif;
    text-align: center;
    padding: 10px;
    color: red;
    font-weight: 900;
    border-color: red;
    border-style: groove;
    border-radius: 10px;
    text-transform: uppercase;
    font-size: 20px;
    transition: background-color .75s ease;
    &:hover{
        background-color: rgba(0,0,0,0);
        cursor: not-allowed;
    }
`

const Error = ({children}) => {
  return (
    <Text>
        {children}
    </Text>
  )
}

export default Error