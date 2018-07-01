import styled from 'react-emotion'

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
    box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14),
      0px 3px 1px -2px rgba(0, 0, 0, 0.12);
    &:hover {
      transform: scale(1.02);
      cursor: pointer;
      text-decoration: none;
      box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14),
        0px 3px 1px -2px rgba(0, 0, 0, 0.12);
    }
    h4 {
      margin: 16px;
      font-weight: 500;
    }
  }
`

export const HeaderImage = styled.div`
  width: 100%;
  height: 200px;
  background-image: ${props => `url(${props['data-headerimageurl']})`};
  background-repeat: no-repeat;
  background-size: cover;
`

export const Card = styled.div`
  background: white;
`

export const Title = styled.h4`
  margin: 0;
  padding: 16px;
`
