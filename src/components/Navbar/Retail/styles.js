import styled from 'react-emotion'
import { Link } from 'react-scroll'
import { darken } from 'polished'

export const Logo = styled.div`
  background-image: url('/media/icons/logo_horizontal.svg');
  background-repeat: no-repeat;
  background-position: left;
  background-size: contain;
  width: 260px;
  height: 32px;
  margin-right: auto;

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 650px) {
    width: 40px;
    background-image: url('/media/icons/flask.svg');
  }
`

export const NavBar = styled.div`
  top: 0;
  left: auto;
  right: 0;
  position: fixed;
  background: #fff;
  height: 64px;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 32px;
  box-sizing: border-box;
  z-index: 10;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14),
    0px 1px 10px 0px rgba(0, 0, 0, 0.12);

  @media (max-width: 1004px) {
    .performance {
      display: none;
    }
  }

  @media (max-width: 865px) {
    .how-it-works {
      display: none;
    }
  }

  @media (max-width: 726px) {
    .faq-link {
      display: none;
    }
  }

  @media (max-width: 430px) {
    .pricing {
      display: none;
    }
  }
`

export const NavLinks = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-left: 8px;
  & button {
    margin: 0 8px;
  }
`

export const ScrollLink = styled(Link)`
  color: ${props => props.theme.colors.primary};
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 16px;
  position: relative;
  font-size: 1.1rem;

  margin-left: 8px;
  &:hover {
    color: ${props => props.theme.colors.primary};
    text-decoration: none;

    &::after {
      content: '';
      position: absolute;
      top: 50%;
      left: 0;
      width: 100%;
      height: 4px;
      transform: translateY(18px);
      background: ${props => props.theme.colors.primary};
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;
    }
  }
  &:active {
    color: ${props => darken(0.1, props.theme.colors.primary)};
    &::after {
      background: ${props => darken(0.1, props.theme.colors.primary)};
    }
  }
`
