import styled from 'react-emotion'

export const Screenshot = styled.img`
    height: 300px;
    box-shadow: 0 0px 4px rgba(0,0,0, 0.2), 0 4px 8px rgba(0,0,0, 0.24);
    transition: transform 0.5s;
    margin-bottom: 32px;
    margin-top: 24px;

    &:hover {
      transform: scale(1.05);
    }
`
