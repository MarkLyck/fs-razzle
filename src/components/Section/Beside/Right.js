import styled from 'react-emotion'

const Right = styled.div`
    max-width: calc(50% - 16px);
    width: 100%;
    margin-left: 32px;
    display: flex;
    flex-direction: column;
    align-items: ${props => (props['data-center'] ? 'center' : 'flex-start')};
`

export default Right
