import { css } from 'emotion'
import { boxStyle } from 'components/Box'

export const ContainerStyle = css`
  ${boxStyle};
  display: table;
  width: calc(100% - 32px);
  margin: 16px;

  @media (max-width: 600px) {
    th:nth-child(4) {
      display: none;
    }
    td:nth-child(4) {
      display: none;
    }
  }

  @media (max-width: 456px) {
    th:nth-child(3) {
      display: none;
    }
    td:nth-child(3) {
      display: none;
    }
  }
`
