import styled from 'react-emotion'
import { sideStyles } from './Beside'

const Right = styled.div`
    ${props => sideStyles(props)}
    margin-left: 24px;
`

export default Right
