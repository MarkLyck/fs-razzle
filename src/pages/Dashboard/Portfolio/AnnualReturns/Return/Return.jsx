import React from 'react'
import styled from 'react-emotion'

const ReturnContainer = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    h3 {
        font-weight: 100;
        margin-bottom: 2px;
        font-size: 1.2rem;
    }
    p {
        color: ${props => props.theme.colors.secondary};
        font-weight: bold;
    }
`

const Return = ({ title, returnSince }) => (
    <ReturnContainer>
        <h3>{title}</h3>
        <p>+{returnSince}%</p>
    </ReturnContainer>
)

export default Return