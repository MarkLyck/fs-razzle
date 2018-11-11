import styled from 'react-emotion'

export const Logo = styled.div`
  background-image: url('/media/icons/logo_horizontal.svg');
  background-repeat: no-repeat;
  background-position: right;
  background-size: contain;
  width: 275px;
  height: 40px;

  &:hover {
    cursor: pointer;
  }

  @media (max-width: ${props => (props.isAdminPage ? '800px' : '540px')}) {
    width: 40px;
    background-image: url('/media/icons/flask.svg');
  }
`

export const LeftContent = styled.div`
  display: flex;
  align-items: center;
`

export const HamburgerButton = styled.button`
  background: none;
  border: none;
  color: ${props => props.theme.colors.primary};
  font-size: 1.4rem;
  padding: 8px;

  @media (min-width: 850px) {
    display: none;
  }
`

export const Bar = styled.div`
  position: relative;
  height: 72px;
  padding: 0 24px;
  width: 100%;
  box-sizing: border-box;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08);
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${props => props.theme.colors.white};

  button {
    margin-right: 8px;
  }
  svg:hover {
    cursor: pointer;
  }

  @media (max-width: 850px) {
    padding-left: 12px;
  }
`

export default null
