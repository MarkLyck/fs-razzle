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

  @media (max-width: 718px) {
    width: 40px;
    background-image: url('/media/icons/flask.svg');
  }
  @media (max-width: 356px) {
    width: 0;
    background-image: none;
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
  box-shadow: 0 8px 16px rgba(16, 33, 53, 0.05);

  @media (max-width: 1069px) {
    .performance {
      display: none;
    }
  }

  @media (max-width: 930px) {
    .how-it-works {
      display: none;
    }
  }

  @media (max-width: 790px) {
    .faq-link {
      display: none;
    }
  }

  @media (max-width: 497px) {
    padding: 0 8px;
    .pricing {
      display: none;
    }
  }
  @media (max-width: 1069px) {
    .performance {
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
