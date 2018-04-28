import styled from 'react-emotion'

const Left = styled.div.`
    max-width: calc(50% - 16px);
    width: 100%;
    margin-right: 32px;
    display: flex;
    flex-direction: column;
    align-items: ${props => (props['data-center'] ? 'center' : 'flex-start')};
`

export default Left
