import styled from 'react-emotion'

export const HeaderImage = styled.div`
  width: 100%;
  height: 400px;
  background-image: ${props => `url(${props['data-headerimageurl']})`};
  background-repeat: no-repeat;
  background-size: cover;
`

export const Title = styled.h1`
  padding: 16px 32px;
  margin: 0;
  font-weight: 500;
`

export const Body = styled.div`
  padding: 0 32px;
  width: 100%;
  max-width: 800px;
`
