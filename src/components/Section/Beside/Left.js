import styled from 'react-emotion'
import { sideStyles } from './Beside'

const Left = styled.div`
    ${props => sideStyles(props)}
    margin-right: 32px;
`

export default Left
