import styled from 'react-emotion'
import Box from 'components/Box'

export const ArticlesList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  margin: 0 auto;
  > a {
    width: 100%;
    max-width: 360px;
    margin: 24px;
    transition: all 0.2s;
    &:hover {
      transform: scale(1.02);
      cursor: pointer;
      text-decoration: none;
    }
  }
`

export const HeaderImage = styled.div`
  width: 100%;
  height: 200px;
  background-image: ${props => `url(${props['data-headerimageurl']})`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
`

export const Card = styled(Box)`
  flex-direction: column;
`

export const Title = styled.h4`
  margin: 0;
  padding: 16px;
  font-weight: 400;
`
