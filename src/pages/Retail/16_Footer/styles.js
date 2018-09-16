import styled from 'react-emotion'

export const FooterContainer = styled.footer`
  background: ${props => props.theme.colors.dbGray};
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    color: ${props => props.theme.colors.white};
  }
  a {
    outline: none;
    &:hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }
`

export const FooterDisclaimer = styled.div`
  padding: 40px;
  @media (max-width: 500px) {
    padding: 16px;
  }
`

export const CopyRightContainer = styled.footer`
  background: ${props => props.theme.colors.darkGray};
  width: 100%;
  padding: 20px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  img {
    margin-right: 32px;
    margin-left: 32px;
    height: 100%;
    width: auto;
  }
  @media (max-width: 500px) {
    flex-direction: column;
    padding: 32px 16px;
    p {
      font-size: 0.8rem;
    }
    img {
      margin-bottom: 16px;
    }
  }
`

export default null
