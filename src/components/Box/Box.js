import styled from 'react-emotion'
import { css } from 'emotion'

export const boxStyle = css`
  display: flex;
  background-color: #fff;
  border-radius: 6px;
  box-shadow: 0 4px 14px 0 rgba(111, 120, 156, 0.08);
  box-sizing: border-box;
`

const Box = styled.div`
  ${boxStyle};
`

export default Box
