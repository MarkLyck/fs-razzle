import { css } from 'emotion'
import { boxStyle } from 'components/Box'

export const ContainerStyle = css`
  ${boxStyle};
  display: table;
  width: calc(100% - 32px);
  margin: 16px;
`
