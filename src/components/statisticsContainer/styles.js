import styled from 'react-emotion'

export const Statistics = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 8px;
  padding: 8px;
  > div {
    width: calc(100% / 4 - 32px);
  }
  > div:first-child {
    background: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.white};
  }
  > div:nth-child(2) {
    background: ${props => props.theme.colors.white};
    color: ${props => props.theme.colors.primary};
    > div:last-child {
      border-left: 2px solid #eaeaeb;
    }
  }
  > div:nth-child(3) {
    background: ${props => props.theme.colors.secondary};
    color: ${props => props.theme.colors.white};
  }
  > div:last-child {
    background: ${props => props.theme.colors.white};
    color: ${props => props.theme.colors.secondary};
    > div:last-child {
      border-left: 2px solid #eaeaeb;
    }
  }
  @media (max-width: 1200px) {
    > div {
      width: calc(100% / 2 - 32px);
      margin-bottom: 16px;
    }
  }

  @media (max-width: 600px) {
    > div {
      width: calc(100% - 32px);
      height: 60px;
    }
    > div:last-child {
      margin-bottom: 0;
    }
  }
`
